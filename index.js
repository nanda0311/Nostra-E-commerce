 function showSidebar() {
            var side= document.querySelector(".side");
            if (side) {
                side.style.left=0;
            }
        }

        function hideSidebar() {
            var side = document.querySelector(".side");
            if (side) {
                side.style.left="-60%";
            }
        }