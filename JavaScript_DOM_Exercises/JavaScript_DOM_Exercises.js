const student = [];

    const bookForm = document.getElementById("book-form");
    const resultCard = document.getElementById("result-card");

    bookForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const membership = document.getElementById("membership").value;
        const genre = document.getElementById("genre").value;
        const bookTitle = document.getElementById("book-title").value;

        if (membership === "student" || membership === "regular") {

            student.push(username, membership, genre, bookTitle);

            resultCard.innerHTML = "";

            const usernameText = document.createElement("p");
            usernameText.textContent = "Username: " + student[0];

            const membershipText = document.createElement("p");
            membershipText.textContent = "Membership: " + student[1];

            const genreText = document.createElement("p");
            genreText.textContent = "Genre: " + student[2];

            const titleText = document.createElement("p");
            titleText.textContent = "Book Title: " + student[3];

            resultCard.appendChild(usernameText);
            resultCard.appendChild(membershipText);
            resultCard.appendChild(genreText);
            resultCard.appendChild(titleText);
        }
    });


    const registerForm = document.getElementById("register-form");

    const regUsername = document.getElementById("reg-username");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");

    const usernameError = document.getElementById("username-error");
    const passwordError = document.getElementById("password-error");
    const confirmError = document.getElementById("confirm-error");

    const registerButton = document.getElementById("register-button");
    const registerMessage = document.getElementById("register-message");


    function checkRegister() {

        usernameError.textContent = "";
        passwordError.textContent = "";
        confirmError.textContent = "";

        let valid = true;

        if (regUsername.value.trim() === "") {
            usernameError.textContent = "Username is required";
            valid = false;
        }

        if (password.value.trim() === "") {
            passwordError.textContent = "Password is required";
            valid = false;
        }

        if (confirmPassword.value.trim() === "") {
            confirmError.textContent = "Confirm password is required";
            valid = false;
        }

        if (password.value !== confirmPassword.value && confirmPassword.value !== "") {
            confirmError.textContent = "Passwords do not match";
            valid = false;
        }

        registerButton.disabled = !valid;
    }


    regUsername.addEventListener("input", checkRegister);
    password.addEventListener("input", checkRegister);
    confirmPassword.addEventListener("input", checkRegister);


    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        registerMessage.textContent = "User registered successfully";
        registerMessage.style.color = "green";

    });


    const paragraph = document.getElementById("paragraph");
    const paragraphResult = document.getElementById("paragraph-result");
    const paragraphHeading = document.getElementById("paragraph-heading");

    let text = paragraph.textContent.trim();

    let words = text.split(/\s+/);

    let wordCount = words.length;

    paragraphHeading.textContent = "Paragraph - " + wordCount + " words";

    let newText = "";

    for (let i = 0; i < words.length; i++) {

        let word = words[i];

        if (word.length > 8) {
            newText += "<span style='background-color: yellow'>" + word + "</span> ";
        } else {
            newText += word + " ";
        }
    }

    paragraph.innerHTML = newText;

    const source = document.createElement("a");
    source.href = "https://google.com/";
    source.textContent = " Source";
    source.target = "_blank";

    paragraphResult.appendChild(source);


    let sentences = text.split(".");

    paragraphResult.innerHTML += "<h3>Sentences</h3>";

    for (let i = 0; i < sentences.length; i++) {

        if (sentences[i].trim() !== "") {
            paragraphResult.innerHTML += "<p>" + sentences[i].trim() + ".</p>";
        }
    }


    const editor = document.getElementById("text-editor");

    document.getElementById("bold").addEventListener("click", function() {

        if (editor.style.fontWeight === "bold") {
            editor.style.fontWeight = "normal";
        } else {
            editor.style.fontWeight = "bold";
        }

    });


    document.getElementById("italic").addEventListener("click", function() {

        if (editor.style.fontStyle === "italic") {
            editor.style.fontStyle = "normal";
        } else {
            editor.style.fontStyle = "italic";
        }

    });


    document.getElementById("left").addEventListener("click", function() {
        editor.style.textAlign = "left";
    });

    document.getElementById("center").addEventListener("click", function() {
        editor.style.textAlign = "center";
    });

    document.getElementById("right").addEventListener("click", function() {
        editor.style.textAlign = "right";
    });


    document.getElementById("upper").addEventListener("click", function() {
        editor.textContent = editor.textContent.toUpperCase();
    });


    document.getElementById("lower").addEventListener("click", function() {
        editor.textContent = editor.textContent.toLowerCase();
    });


    document.getElementById("capitalize").addEventListener("click", function() {

        let words = editor.textContent.toLowerCase().split(" ");

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }

        editor.textContent = words.join(" ");

    });


    document.getElementById("clear").addEventListener("click", function() {
        editor.textContent = "";
    });


    document.getElementById("text-color").addEventListener("input", function() {
        editor.style.color = this.value;
    });


    document.getElementById("background-color").addEventListener("input", function() {
        editor.style.backgroundColor = this.value;
    });


    document.getElementById("font-size").addEventListener("input", function() {
        editor.style.fontSize = this.value + "px";
    });


    document.getElementById("font-family").addEventListener("change", function() {
        editor.style.fontFamily = this.value;
    });