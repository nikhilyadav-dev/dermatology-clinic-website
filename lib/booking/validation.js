export function validateStep(stepId, data) {
  const errors = {};

  if (stepId === "concern") {
    if (!data.concern) {
      errors.concern = "Please select a concern.";
    }

    return errors;
  }

  if (stepId === "details") {
    const name = data.name.trim();
    const phone = data.phone.trim();
    const email = data.email.trim();

    if (!name) {
      errors.name = "Please enter your name.";
    } else if (name.length < 2) {
      errors.name = "Please enter a valid name.";
    } else if (name.length > 100) {
      errors.name = "Name is too long.";
    }

    if (!phone) {
      errors.phone = "Please enter your phone number.";
    } else if (!/^[0-9+\-()\s]{7,20}$/.test(phone)) {
      errors.phone = "Please enter a valid phone number.";
    }

    if (email && email.length > 254) {
      errors.email = "Email address is too long.";
    } else if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

    return errors;
  }

  if (stepId === "visit") {
    if (!data.preferredDate) {
      errors.preferredDate = "Please choose a preferred date.";
    }

    if (!data.preferredTime) {
      errors.preferredTime = "Please choose a preferred time.";
    }

    return errors;
  }

  if (stepId === "review") {
    if (!data.concern) {
      errors.concern = "Please select a concern.";
    }

    if (!data.name?.trim()) {
      errors.name = "Please enter your name.";
    }

    if (!data.phone?.trim()) {
      errors.phone = "Please enter your phone number.";
    }

    if (!data.preferredDate) {
      errors.preferredDate = "Please choose a preferred date.";
    }

    if (!data.preferredTime) {
      errors.preferredTime = "Please choose a preferred time.";
    }

    return errors;
  }

  return errors;
}
