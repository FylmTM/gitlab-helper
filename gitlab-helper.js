function selectCheckbox() {
    const mergeRequestForceRemoveSourceBranch = document.getElementById("merge_request_force_remove_source_branch");
    const mergeRequestSquash = document.getElementById("merge_request_squash");

    if (mergeRequestForceRemoveSourceBranch != null && mergeRequestForceRemoveSourceBranch.checked === false) {
        mergeRequestForceRemoveSourceBranch.click();
    }
    if (mergeRequestSquash != null && mergeRequestSquash.checked === false) {
        mergeRequestSquash.click();
    }
}

document.addEventListener('DOMContentLoaded', (e) => {
    selectCheckbox();
});

selectCheckbox();
