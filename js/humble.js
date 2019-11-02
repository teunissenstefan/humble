var initAccordion = function(){
    var accordionHeaderElements = document.querySelectorAll(".accordion-tab > .header");
    for(var i = 0; i < accordionHeaderElements.length; i++) // Loop through all accordion headers
    {
        var accHead = accordionHeaderElements.item(i);
        accHead.addEventListener('click', function(){
            var accParent = this.parentNode;
            if (accParent.classList.contains('open')) {
                accParent.classList.remove('open');
                accParent.classList.add('closed');
            }else{
                var accordion = accParent.parentNode;
                var accordionChildren = accordion.querySelectorAll(".accordion-tab");
                for(var i = 0; i < accordionChildren.length; i++) // Loop through all accordion headers except accParent and close them
                {
                    accordionChildren.item(i).classList.remove("open");
                    accordionChildren.item(i).classList.add("closed");
                }
                accParent.classList.remove('closed');
                accParent.classList.add('open');
            }
        });
    }
}

window.addEventListener('load', function(){
    initAccordion();
});