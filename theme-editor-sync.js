const onSelectSection = (event) => {
    const CassList = event.target.classList;
    const section = event.target;
    
}

const onDeSelectSection = (event) => {
    const CassList = event.target.classList;
    const section = event.target;
}

const onSelectSectionBlock = (event) => {
    const CassList = event.target.classList;
    const block = event.target; 
    if(CassList.contains('swiper-slide')) {
        setTimeout(() => {
            const blockID = event.detail.blockId;
            const sectionId = event.detail.sectionId;
            //console.log(blockID, sectionId);
            if(document.getElementById('shopify-section-' + sectionId).querySelector('smart-slider')){
                document.getElementById('shopify-section-' + sectionId).querySelector('smart-slider').swiper.slideTo((event.target.dataset.swiperSlideIndex * 1));
            }
        }, 200);
    }
}

const onDeSelectSectionBlock = (event) => {
    const CassList = event.target.classList;
    const block = event.target;
}

document.addEventListener('shopify:section:select', onSelectSection);
document.addEventListener('shopify:section:deselect', onDeSelectSection);
document.addEventListener('shopify:section:reorder', onDeSelectSection);

document.addEventListener('shopify:block:select', onSelectSectionBlock);
document.addEventListener('shopify:block:focus', onSelectSectionBlock);
document.addEventListener('shopify:block:deselect', onDeSelectSectionBlock);
document.addEventListener('shopify:block:reorder', onDeSelectSectionBlock);

document.addEventListener('shopify:inspector:activate', function(event){
    console.log(event);
});
