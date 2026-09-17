// import { markdownToTiptap } from "./lib/markdownToTiptap.js";

// const markdown = `
// PRP therapy can be used for certain types of hair loss.

// ## How Does PRP Work?

// The treatment involves several steps.

// ### Blood Collection

// A small amount of blood is collected.

// ### PRP Preparation

// The blood sample is processed to separate platelet-rich plasma.

// ## Benefits

// - May support hair growth
// - Uses the patient's own blood components
// - Minimally invasive

// > Treatment suitability varies from person to person.

// **Important:** Consult a dermatologist for proper evaluation.

// [Learn more about hair loss treatment](https://example.com/hair-loss-treatment)

// ## Frequently Asked Questions

// ### Is PRP painful?

// Most patients experience mild discomfort.
// `;

// const result = markdownToTiptap(markdown);

// console.log(JSON.stringify(result, null, 2));

import { markdownToHtml } from "./lib/markdownToHtml.js";

const markdown = `
PRP therapy can be used for certain types of hair loss.

## How Does PRP Work?

The treatment involves several steps.

### Blood Collection

A small amount of blood is collected.

## Benefits

- May support hair growth
- Uses the patient's own blood components
- Minimally invasive

> Treatment suitability varies from person to person.

**Important:** Consult a dermatologist for proper evaluation.

[Learn more](https://example.com/hair-loss)
`;

const html = markdownToHtml(markdown);

console.log(html);
