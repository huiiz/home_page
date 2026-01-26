function initLightbox() {
    const lightbox = document.getElementById('paper-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const paperImages = document.querySelectorAll('.paper-img img');

    paperImages.forEach(img => {
        img.addEventListener('click', function(e) {
            // 🛑 删除了之前的宽度判断，现在手机上点缩略图也能放大了
            
            // 设置大图源
            lightboxImg.src = this.src;
            // 显示灯箱
            lightbox.classList.add('active');
            // 禁止页面滚动（防止背景跟着滑）
            document.body.style.overflow = 'hidden';
            
            // 阻止事件冒泡，防止立刻触发关闭
            e.stopPropagation();
        });
    });
}

function closeLightbox() {
    const lightbox = document.getElementById('paper-lightbox');
    lightbox.classList.remove('active');
    // 恢复页面滚动
    document.body.style.overflow = 'auto';
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initLightbox);