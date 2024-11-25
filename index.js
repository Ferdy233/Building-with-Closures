const button = document.getElementById('myButton');

        button.addEventListener('click', handleClick);

        function handleClick() {
            console.log(this.id);        
            console.log(this.textContent); 
        }