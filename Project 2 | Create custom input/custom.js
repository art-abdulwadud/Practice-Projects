const singleInputContainer = document.querySelectorAll('.single-input-container');

singleInputContainer.forEach((input) => {
    // Add active-label class when the respective input is focused in
    input.addEventListener('focusin', 
        (ev) => document.querySelector(`label[for="${ev.target.id}"]`).classList.add('active-label'));
    // Remove active-label class when the respective input is focused out
    input.addEventListener('focusout', (ev) => {
        // We have to check if it has no value otherwise 'null' means we do nothing
        ev.target.value.length < 1 ? 
          document.querySelector(`label[for="${ev.target.id}"]`).classList.remove('active-label')
            : null;
    });
})
