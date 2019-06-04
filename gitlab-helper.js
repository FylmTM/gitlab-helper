// Select merge request checkboxes
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

// Sort by name by default
const links = document.querySelectorAll('.js-group-filter-dropdown-wrap ul li a');
const sortByNameAscLink = [...links.values()].find((link) => link.href.endsWith("name_asc"));

if (sortByNameAscLink) {
    if (!sortByNameAscLink.className.includes("is-active")) {
        const params = new URLSearchParams(window.location.search);
        if (!params.has('sort')) {
            sortByNameAscLink.click();
        }
    }
}
