document.addEventListener('DOMContentLoaded', function() {
    const blocks = document.querySelectorAll('.block');

    blocks.forEach(block => {
        block.addEventListener('click', function() {
            // Add any desired actions when the block is clicked
            console.log('Block clicked!');
            // You can add more functionality or redirect to another page
            // window.location.href = 'newPage.html';
        });
    });
});
