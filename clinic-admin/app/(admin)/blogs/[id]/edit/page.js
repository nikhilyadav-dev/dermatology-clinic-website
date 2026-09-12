"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getBlogById, updateBlog } from "../../actions";
import RichTextEditor from "@/components/blog/RichTextEditor";

const categories = [
  {
    name: "Skin Care",
    slug: "skin-care",
  },
  {
    name: "Hair Care",
    slug: "hair-care",
  },
  {
    name: "Treatments",
    slug: "treatments",
  },
  {
    name: "Skin Health",
    slug: "skin-health",
  },
  {
    name: "Clinic Updates",
    slug: "clinic-updates",
  },
];

export default function EditBlogPage() {
  const params = useParams();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const [showSeo, setShowSeo] = useState(false);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    status: "DRAFT",
    category: "",
    featuredImage: "",
    imageAlt: "",
    seoTitle: "",
    metaDescription: "",
    keywords: "",
    canonicalUrl: "",
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
  });

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const generateSlug = (value) => {
    const slug = value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    updateField("slug", slug);
  };

  const handleTitleChange = (value) => {
    updateField("title", value);

    if (!form.slug) {
      generateSlug(value);
    }
  };

  useEffect(() => {
    async function loadBlog() {
      const result = await getBlogById(params.id);

      if (!result.success) {
        alert(result.error || "Blog not found");
        router.push("/blogs");
        return;
      }

      const blog = result.blog;

      setForm({
        title: blog.title || "",
        slug: blog.slug || "",
        excerpt: blog.excerpt || "",
        content: blog.content || "",
        status: blog.status || "DRAFT",
        category: blog.category?.slug || "",
        featuredImage: blog.featuredImage || "",
        imageAlt: blog.imageAlt || "",
        seoTitle: blog.seoTitle || "",
        metaDescription: blog.metaDescription || "",
        keywords: blog.keywords || "",
        canonicalUrl: blog.canonicalUrl || "",
        ogTitle: blog.ogTitle || "",
        ogDescription: blog.ogDescription || "",
        ogImage: blog.ogImage || "",
      });

      setIsLoading(false);
    }

    loadBlog();
  }, [params.id, router]);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(status) {
    if (
      !form.title ||
      !form.slug ||
      !form.excerpt ||
      !form.content ||
      !form.category
    ) {
      alert("Please fill all required fields.");
      return;
    }

    setIsSaving(true);

    const result = await updateBlog(params.id, {
      ...form,
      status,
      categoryId: form.category,
    });

    if (!result.success) {
      alert(result.error || "Failed to update blog.");
      setIsSaving(false);
      return;
    }

    router.push("/blogs");
  }

  if (isLoading) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <p className="text-sm text-muted">Loading blog...</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Edit Blog</h1>
          <p className="mt-1 text-sm text-muted">
            Update your blog content and SEO details.
          </p>
        </div>
        {/* Content */}
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
            {/* Main */}
            <div className="space-y-6">
              {/* Blog Information */}
              <section className="rounded-xl border border-border bg-surface">
                <div className="border-b border-border px-5 py-4">
                  <h2 className="font-semibold text-foreground">
                    Blog Information
                  </h2>

                  <p className="mt-1 text-sm text-muted">
                    Basic information about your blog post.
                  </p>
                </div>

                <div className="space-y-5 p-5">
                  {/* Title */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Title
                    </label>

                    <input
                      type="text"
                      value={form.title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      placeholder="Enter blog title"
                      className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  {/* Slug */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Slug
                    </label>

                    <input
                      type="text"
                      value={form.slug}
                      onChange={(e) => updateField("slug", e.target.value)}
                      placeholder="your-blog-url"
                      className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />

                    <p className="mt-1.5 text-xs text-muted">
                      Used in the blog URL.
                    </p>
                  </div>

                  {/* Excerpt */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Excerpt
                    </label>

                    <textarea
                      rows={4}
                      value={form.excerpt}
                      onChange={(e) => updateField("excerpt", e.target.value)}
                      placeholder="Write a short summary of this blog..."
                      className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />

                    <p className="mt-1.5 text-xs text-muted">
                      A short description used in blog cards and previews.
                    </p>
                  </div>
                </div>
              </section>

              {/* Content */}
              <section className="rounded-xl border border-border bg-surface">
                <div className="border-b border-border px-5 py-4">
                  <h2 className="font-semibold text-foreground">Content</h2>

                  <p className="mt-1 text-sm text-muted">
                    Write the main content of your blog.
                  </p>
                </div>

                <div className="p-5">
                  <RichTextEditor
                    value={form.content}
                    onChange={(value) => updateField("content", value)}
                  />
                </div>
              </section>

              {/* Featured Image */}
              <section className="rounded-xl border border-border bg-surface">
                <div className="border-b border-border px-5 py-4">
                  <h2 className="font-semibold text-foreground">
                    Featured Image
                  </h2>

                  <p className="mt-1 text-sm text-muted">
                    Main image displayed with the blog post.
                  </p>
                </div>

                <div className="space-y-5 p-5">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Image URL
                    </label>

                    <input
                      type="url"
                      value={form.featuredImage}
                      onChange={(e) =>
                        updateField("featuredImage", e.target.value)
                      }
                      placeholder="https://example.com/image.jpg"
                      className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Image Alt Text
                    </label>

                    <input
                      type="text"
                      value={form.imageAlt}
                      onChange={(e) => updateField("imageAlt", e.target.value)}
                      placeholder="Describe the image"
                      className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />

                    <p className="mt-1.5 text-xs text-muted">
                      Helps with accessibility and image SEO.
                    </p>
                  </div>

                  {form.featuredImage && (
                    <div className="overflow-hidden rounded-lg border border-border">
                      <img
                        src={form.featuredImage}
                        alt={form.imageAlt || "Featured image preview"}
                        className="aspect-video w-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </section>

              {/* SEO */}
              <section className="overflow-hidden rounded-xl border border-border bg-surface">
                <button
                  type="button"
                  onClick={() => setShowSeo((prev) => !prev)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-background"
                >
                  <div>
                    <h2 className="font-semibold text-foreground">
                      SEO & Social Sharing
                    </h2>

                    <p className="mt-1 text-sm text-muted">
                      Optimize how this blog appears in search engines and
                      social media.
                    </p>
                  </div>

                  <span className="text-xl text-muted">
                    {showSeo ? "−" : "+"}
                  </span>
                </button>

                {showSeo && (
                  <div className="space-y-5 border-t border-border p-5">
                    {/* SEO Title */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">
                        SEO Title
                      </label>

                      <input
                        type="text"
                        value={form.seoTitle}
                        onChange={(e) =>
                          updateField("seoTitle", e.target.value)
                        }
                        placeholder="SEO optimized title"
                        className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                      />

                      <p className="mt-1.5 text-xs text-muted">
                        Recommended: around 50–60 characters.
                      </p>
                    </div>

                    {/* Meta Description */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">
                        Meta Description
                      </label>

                      <textarea
                        rows={4}
                        value={form.metaDescription}
                        onChange={(e) =>
                          updateField("metaDescription", e.target.value)
                        }
                        placeholder="Write a search engine friendly description..."
                        className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                      />

                      <p className="mt-1.5 text-xs text-muted">
                        Recommended: around 150–160 characters.
                      </p>
                    </div>

                    {/* Keywords */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">
                        Keywords
                      </label>

                      <input
                        type="text"
                        value={form.keywords}
                        onChange={(e) =>
                          updateField("keywords", e.target.value)
                        }
                        placeholder="acne treatment, skin care, dermatologist"
                        className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                      />

                      <p className="mt-1.5 text-xs text-muted">
                        Separate keywords with commas.
                      </p>
                    </div>

                    {/* Canonical URL */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">
                        Canonical URL
                      </label>

                      <input
                        type="url"
                        value={form.canonicalUrl}
                        onChange={(e) =>
                          updateField("canonicalUrl", e.target.value)
                        }
                        placeholder="https://example.com/blog/example"
                        className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                      />
                    </div>

                    {/* Social */}
                    <div className="border-t border-border pt-5">
                      <h3 className="mb-4 text-sm font-semibold text-foreground">
                        Social Sharing
                      </h3>

                      <div className="space-y-5">
                        <div>
                          <label className="mb-2 block text-sm font-medium text-foreground">
                            OG Title
                          </label>

                          <input
                            type="text"
                            value={form.ogTitle}
                            onChange={(e) =>
                              updateField("ogTitle", e.target.value)
                            }
                            placeholder="Title shown when shared"
                            className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium text-foreground">
                            OG Description
                          </label>

                          <textarea
                            rows={3}
                            value={form.ogDescription}
                            onChange={(e) =>
                              updateField("ogDescription", e.target.value)
                            }
                            placeholder="Description shown when shared"
                            className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium text-foreground">
                            OG Image URL
                          </label>

                          <input
                            type="url"
                            value={form.ogImage}
                            onChange={(e) =>
                              updateField("ogImage", e.target.value)
                            }
                            placeholder="https://example.com/social-image.jpg"
                            className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Publishing */}
              <section className="rounded-xl border border-border bg-surface">
                <div className="border-b border-border px-5 py-4">
                  <h2 className="font-semibold text-foreground">Publishing</h2>
                </div>

                <div className="space-y-5 p-5">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Status
                    </label>

                    <select
                      value={form.status}
                      onChange={(e) => updateField("status", e.target.value)}
                      className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                    >
                      <option value="DRAFT">Draft</option>
                      <option value="PUBLISHED">Published</option>
                    </select>
                  </div>

                  <div className="grid gap-3">
                    <button
                      type="button"
                      disabled={isSaving}
                      onClick={() => handleSubmit("DRAFT")}
                      className="w-full rounded-lg border border-border px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-background disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSaving ? "Saving..." : "Save Draft"}
                    </button>

                    <button
                      type="button"
                      disabled={isSaving}
                      onClick={() => handleSubmit("PUBLISHED")}
                      className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSaving ? "Updating..." : "Update & Publish"}
                    </button>
                  </div>
                </div>
              </section>

              {/* Category */}
              <section className="rounded-xl border border-border bg-surface">
                <div className="border-b border-border px-5 py-4">
                  <h2 className="font-semibold text-foreground">
                    Organization
                  </h2>
                </div>

                <div className="p-5">
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Category
                  </label>

                  <select
                    value={form.category}
                    onChange={(e) => updateField("category", e.target.value)}
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                  >
                    <option value="">Select category</option>

                    {categories.map((category) => (
                      <option key={category.slug} value={category.slug}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </section>

              {/* SEO Summary */}
              <section className="rounded-xl border border-border bg-surface">
                <div className="border-b border-border px-5 py-4">
                  <h2 className="font-semibold text-foreground">
                    SEO Checklist
                  </h2>
                </div>

                <div className="space-y-3 p-5 text-sm">
                  <ChecklistItem
                    label="Blog title"
                    completed={Boolean(form.title)}
                  />

                  <ChecklistItem
                    label="URL slug"
                    completed={Boolean(form.slug)}
                  />

                  <ChecklistItem
                    label="Excerpt"
                    completed={Boolean(form.excerpt)}
                  />

                  <ChecklistItem
                    label="Featured image"
                    completed={Boolean(form.featuredImage)}
                  />

                  <ChecklistItem
                    label="SEO title"
                    completed={Boolean(form.seoTitle)}
                  />

                  <ChecklistItem
                    label="Meta description"
                    completed={Boolean(form.metaDescription)}
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChecklistItem({ label, completed }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${
          completed ? "bg-primary/10 text-primary" : "bg-background text-muted"
        }`}
      >
        {completed ? "✓" : "○"}
      </span>

      <span className={completed ? "text-foreground" : "text-muted"}>
        {label}
      </span>
    </div>
  );
}
