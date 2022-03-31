let saveElement = document.getElementById("save");
let certificateNameEl = document.getElementById("certificateName");
let certificateIssuerEl = document.getElementById("certificateIssuer");
let nameErrorEl = document.getElementById("error");
let errorissuerEl = document.getElementById("errorissuer");
let containerEl = document.getElementById("container");

let CertificateNameDispEl = document.getElementById("CertificateNameDisp");
let IssuerNameDispEl = document.getElementById("IssuerNameDisp");
let showContainerEl = document.getElementById("showContainer");
let viewCertificateEl = document.getElementById("viewCertificate");
let object = {};

Array.prototype.forEach.call(
    document.querySelectorAll(".file-upload-button"),
    function(button) {
        const hiddenInput = button.parentElement.querySelector(
            ".file-upload-input"
        );
        const label = button.parentElement.querySelector(".file-upload-label");
        const defaultLabelText = "Upload a file showing your certification";

        // Set default text for label
        label.textContent = defaultLabelText;
        label.title = defaultLabelText;

        button.addEventListener("click", function() {
            hiddenInput.click();
        });

        hiddenInput.addEventListener("change", function() {
            const filenameList = Array.prototype.map.call(hiddenInput.files, function(
                file
            ) {
                object['file Name'] = file.name
                return file.name;
            });

            label.textContent = filenameList.join(", ") || defaultLabelText;
            label.title = label.textContent;
        });
    }
);

saveElement.onclick = function() {
    let name = certificateNameEl.value;
    let issuer = certificateIssuerEl.value;
    object = {
        name: name,
        issuer: issuer,
        ...object
    };
    console.log(object);
    if (name === "") {
        nameErrorEl.textContent = "Please enter certification name";
    } else if (issuer === "") {
        errorissuerEl.textContent = "Please enter issuer name";
    } else {
        containerEl.classList.add("success");
        showContainerEl.classList.add("show-container");
        CertificateNameDispEl.textContent = name;
        IssuerNameDispEl.textContent = issuer;
        localStorage.setItem("details", object);
    }
};

viewCertificateEl.onclick = function() {
    localStorage.getItem("details");
};