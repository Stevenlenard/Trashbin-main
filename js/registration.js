// ============================================
// REGISTRATION PAGE VALIDATION & FUNCTIONALITY
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] Registration page loaded")

  const registrationForm = document.getElementById("registrationForm")
  const firstNameInput = document.getElementById("firstName")
  const lastNameInput = document.getElementById("lastName")
  const emailInput = document.getElementById("regEmail")
  const phoneInput = document.getElementById("phone")
  const passwordInput = document.getElementById("regPassword")
  const confirmPasswordInput = document.getElementById("confirmPassword")
  const toggleRegPassword = document.getElementById("toggleRegPassword")
  const toggleConfirmPassword = document.getElementById("toggleConfirmPassword")

  if (!registrationForm) {
    console.error("[v0] Registration form not found!")
    return
  }
  console.log("[v0] Registration form found")

  if (toggleRegPassword) {
    toggleRegPassword.addEventListener("click", (e) => {
      e.preventDefault()
      const icon = toggleRegPassword.querySelector("i")

      if (passwordInput.type === "password") {
        passwordInput.type = "text"
        icon.classList.remove("fa-eye")
        icon.classList.add("fa-eye-slash")
      } else {
        passwordInput.type = "password"
        icon.classList.remove("fa-eye-slash")
        icon.classList.add("fa-eye")
      }
    })
  }

  if (toggleConfirmPassword) {
    toggleConfirmPassword.addEventListener("click", (e) => {
      e.preventDefault()
      const icon = toggleConfirmPassword.querySelector("i")

      if (confirmPasswordInput.type === "password") {
        confirmPasswordInput.type = "text"
        icon.classList.remove("fa-eye")
        icon.classList.add("fa-eye-slash")
      } else {
        confirmPasswordInput.type = "password"
        icon.classList.remove("fa-eye-slash")
        icon.classList.add("fa-eye")
      }
    })
  }

  if (firstNameInput) {
    firstNameInput.addEventListener("blur", () => {
      const error = document.getElementById("firstNameError")
      if (firstNameInput.value.trim() === "") {
        firstNameInput.classList.add("error")
        firstNameInput.classList.remove("success")
        error.textContent = "First name is required"
        error.classList.add("show")
      } else if (!/^[a-zA-Z\s]+$/.test(firstNameInput.value)) {
        firstNameInput.classList.add("error")
        firstNameInput.classList.remove("success")
        error.textContent = "First name can only contain letters"
        error.classList.add("show")
      } else {
        firstNameInput.classList.remove("error")
        firstNameInput.classList.add("success")
        error.classList.remove("show")
      }
    })

    firstNameInput.addEventListener("input", () => {
      document.getElementById("firstNameError").classList.remove("show")
      firstNameInput.classList.remove("error")
    })
  }

  if (lastNameInput) {
    lastNameInput.addEventListener("blur", () => {
      const error = document.getElementById("lastNameError")
      if (lastNameInput.value.trim() === "") {
        lastNameInput.classList.add("error")
        lastNameInput.classList.remove("success")
        error.textContent = "Last name is required"
        error.classList.add("show")
      } else if (!/^[a-zA-Z\s]+$/.test(lastNameInput.value)) {
        lastNameInput.classList.add("error")
        lastNameInput.classList.remove("success")
        error.textContent = "Last name can only contain letters"
        error.classList.add("show")
      } else {
        lastNameInput.classList.remove("error")
        lastNameInput.classList.add("success")
        error.classList.remove("show")
      }
    })

    lastNameInput.addEventListener("input", () => {
      document.getElementById("lastNameError").classList.remove("show")
      lastNameInput.classList.remove("error")
    })
  }

  if (emailInput) {
    emailInput.addEventListener("blur", () => {
      const error = document.getElementById("emailError")
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if (emailInput.value.trim() === "") {
        emailInput.classList.add("error")
        emailInput.classList.remove("success")
        error.textContent = "Email is required"
        error.classList.add("show")
      } else if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add("error")
        emailInput.classList.remove("success")
        error.textContent = "Please enter a valid email address"
        error.classList.add("show")
      } else {
        emailInput.classList.remove("error")
        emailInput.classList.add("success")
        error.classList.remove("show")
      }
    })

    emailInput.addEventListener("input", () => {
      document.getElementById("emailError").classList.remove("show")
      emailInput.classList.remove("error")
    })
  }

  if (phoneInput) {
    phoneInput.addEventListener("blur", () => {
      const error = document.getElementById("phoneError")
      const phoneRegex = /^\d{11}$/
      const cleanPhone = phoneInput.value.replace(/\D/g, "")

      if (phoneInput.value.trim() === "") {
        phoneInput.classList.add("error")
        phoneInput.classList.remove("success")
        error.textContent = "Phone number is required"
        error.classList.add("show")
      } else if (!phoneRegex.test(cleanPhone)) {
        phoneInput.classList.add("error")
        phoneInput.classList.remove("success")
        error.textContent = "Phone number must be exactly 11 digits"
        error.classList.add("show")
      } else {
        phoneInput.classList.remove("error")
        phoneInput.classList.add("success")
        error.classList.remove("show")
      }
    })

    phoneInput.addEventListener("input", () => {
      document.getElementById("phoneError").classList.remove("show")
      phoneInput.classList.remove("error")
    })
  }

  if (passwordInput) {
    passwordInput.addEventListener("blur", () => {
      const error = document.getElementById("passwordError")
      const password = passwordInput.value

      if (password === "") {
        passwordInput.classList.add("error")
        passwordInput.classList.remove("success")
        error.textContent = "Password is required"
        error.classList.add("show")
      } else if (password.length < 8) {
        passwordInput.classList.add("error")
        passwordInput.classList.remove("success")
        error.textContent = "Password must be at least 8 characters"
        error.classList.add("show")
      } else if (!/[A-Z]/.test(password)) {
        passwordInput.classList.add("error")
        passwordInput.classList.remove("success")
        error.textContent = "Password must contain an uppercase letter"
        error.classList.add("show")
      } else if (!/[a-z]/.test(password)) {
        passwordInput.classList.add("error")
        passwordInput.classList.remove("success")
        error.textContent = "Password must contain a lowercase letter"
        error.classList.add("show")
      } else if (!/[0-9]/.test(password)) {
        passwordInput.classList.add("error")
        passwordInput.classList.remove("success")
        error.textContent = "Password must contain a number"
        error.classList.add("show")
      } else {
        passwordInput.classList.remove("error")
        passwordInput.classList.add("success")
        error.classList.remove("show")
      }
    })

    passwordInput.addEventListener("input", () => {
      document.getElementById("passwordError").classList.remove("show")
      passwordInput.classList.remove("error")
    })
  }

  if (confirmPasswordInput) {
    confirmPasswordInput.addEventListener("blur", () => {
      const error = document.getElementById("confirmPasswordError")

      if (confirmPasswordInput.value === "") {
        confirmPasswordInput.classList.add("error")
        confirmPasswordInput.classList.remove("success")
        error.textContent = "Please confirm your password"
        error.classList.add("show")
      } else if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordInput.classList.add("error")
        confirmPasswordInput.classList.remove("success")
        error.textContent = "Passwords do not match"
        error.classList.add("show")
      } else {
        confirmPasswordInput.classList.remove("error")
        confirmPasswordInput.classList.add("success")
        error.classList.remove("show")
      }
    })

    confirmPasswordInput.addEventListener("input", () => {
      document.getElementById("confirmPasswordError").classList.remove("show")
      confirmPasswordInput.classList.remove("error")
    })
  }

  if (registrationForm) {
    registrationForm.addEventListener("submit", async (e) => {
      e.preventDefault()
      console.log("[v0] Form submit button clicked")

      let isValid = true
      const submitBtn = registrationForm.querySelector('button[type="submit"]')
      const originalText = submitBtn.textContent

      document.querySelectorAll(".error-message").forEach((el) => el.classList.remove("show"))
      document.querySelectorAll("input").forEach((el) => el.classList.remove("error"))

      // Validate first name
      if (!firstNameInput.value.trim()) {
        firstNameInput.classList.add("error")
        document.getElementById("firstNameError").textContent = "First name is required"
        document.getElementById("firstNameError").classList.add("show")
        isValid = false
      } else if (!/^[a-zA-Z\s]+$/.test(firstNameInput.value)) {
        firstNameInput.classList.add("error")
        document.getElementById("firstNameError").textContent = "First name can only contain letters"
        document.getElementById("firstNameError").classList.add("show")
        isValid = false
      }

      // Validate last name
      if (!lastNameInput.value.trim()) {
        lastNameInput.classList.add("error")
        document.getElementById("lastNameError").textContent = "Last name is required"
        document.getElementById("lastNameError").classList.add("show")
        isValid = false
      } else if (!/^[a-zA-Z\s]+$/.test(lastNameInput.value)) {
        lastNameInput.classList.add("error")
        document.getElementById("lastNameError").textContent = "Last name can only contain letters"
        document.getElementById("lastNameError").classList.add("show")
        isValid = false
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailInput.value.trim()) {
        emailInput.classList.add("error")
        document.getElementById("emailError").textContent = "Email is required"
        document.getElementById("emailError").classList.add("show")
        isValid = false
      } else if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add("error")
        document.getElementById("emailError").textContent = "Please enter a valid email address"
        document.getElementById("emailError").classList.add("show")
        isValid = false
      }

      // Validate phone
      const phoneRegex = /^\d{11}$/
      const cleanPhone = phoneInput.value.replace(/\D/g, "")
      if (!phoneInput.value.trim()) {
        phoneInput.classList.add("error")
        document.getElementById("phoneError").textContent = "Phone number is required"
        document.getElementById("phoneError").classList.add("show")
        isValid = false
      } else if (!phoneRegex.test(cleanPhone)) {
        phoneInput.classList.add("error")
        document.getElementById("phoneError").textContent = "Phone number must be exactly 11 digits"
        document.getElementById("phoneError").classList.add("show")
        isValid = false
      }

      // Validate password
      const password = passwordInput.value
      if (!password) {
        passwordInput.classList.add("error")
        document.getElementById("passwordError").textContent = "Password is required"
        document.getElementById("passwordError").classList.add("show")
        isValid = false
      } else if (password.length < 8) {
        passwordInput.classList.add("error")
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters"
        document.getElementById("passwordError").classList.add("show")
        isValid = false
      } else if (!/[A-Z]/.test(password)) {
        passwordInput.classList.add("error")
        document.getElementById("passwordError").textContent = "Password must contain an uppercase letter"
        document.getElementById("passwordError").classList.add("show")
        isValid = false
      } else if (!/[a-z]/.test(password)) {
        passwordInput.classList.add("error")
        document.getElementById("passwordError").textContent = "Password must contain a lowercase letter"
        document.getElementById("passwordError").classList.add("show")
        isValid = false
      } else if (!/[0-9]/.test(password)) {
        passwordInput.classList.add("error")
        document.getElementById("passwordError").textContent = "Password must contain a number"
        document.getElementById("passwordError").classList.add("show")
        isValid = false
      }

      // Validate confirm password
      if (!confirmPasswordInput.value) {
        confirmPasswordInput.classList.add("error")
        document.getElementById("confirmPasswordError").textContent = "Please confirm your password"
        document.getElementById("confirmPasswordError").classList.add("show")
        isValid = false
      } else if (confirmPasswordInput.value !== password) {
        confirmPasswordInput.classList.add("error")
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match"
        document.getElementById("confirmPasswordError").classList.add("show")
        isValid = false
      }

      if (isValid) {
        try {
          submitBtn.textContent = "Creating Account..."
          submitBtn.disabled = true

          const formData = new FormData(registrationForm)

          console.log("[v0] Sending registration data to server...")
          const response = await fetch("register-handler.php", {
            method: "POST",
            body: formData,
          })

          console.log("[v0] Response status:", response.status)

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }

          const responseText = await response.text()
          console.log("[v0] Raw response:", responseText)

          const data = JSON.parse(responseText)
          console.log("[v0] Parsed response:", data)

          if (data.success) {
            showNotification(
              "✓ Registration Successful!",
              "Your account has been created. Redirecting to login...",
              "success",
            )

            setTimeout(() => {
              window.location.href = data.redirect
            }, 2000)
          } else {
            showNotification("✗ Registration Failed", data.message || "Please check the errors below.", "error")

            // Display errors from backend
            if (data.errors) {
              for (const [field, message] of Object.entries(data.errors)) {
                const errorElement = document.getElementById(field + "Error")
                if (errorElement) {
                  errorElement.textContent = message
                  errorElement.classList.add("show")
                  const inputElement = document.getElementById(field)
                  if (inputElement) {
                    inputElement.classList.add("error")
                  }
                }
              }
            }

            // Reset button
            submitBtn.textContent = originalText
            submitBtn.disabled = false
          }
        } catch (error) {
          console.error("[v0] Error occurred:", error)
          showNotification("✗ Error", "An error occurred: " + error.message, "error")
          submitBtn.textContent = originalText
          submitBtn.disabled = false
        }
      }
    })
  }
})

function showNotification(title, message, type) {
  // Remove existing notification if any
  const existingNotification = document.querySelector(".notification")
  if (existingNotification) {
    existingNotification.remove()
  }

  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.innerHTML = `
    <div class="notification-content">
      <h4>${title}</h4>
      <p>${message}</p>
    </div>
  `

  document.body.appendChild(notification)

  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.remove()
  }, 5000)
}
