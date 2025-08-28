document.addEventListener('DOMContentLoaded', function() {
    // 获取元素
    const menuToggle = document.querySelector('.menu-toggle');
    const closeBtn = document.querySelector('.close-btn');
    const sidebar = document.getElementById('sidebar');
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');
    
    // 菜单切换功能
    menuToggle.addEventListener('click', function() {
        sidebar.classList.add('open');
    });
    
    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('open');
    });
    
    // 导航项点击事件
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // 更新活动导航项
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // 显示对应页面
            const pageId = this.getAttribute('data-page');
            pages.forEach(page => {
                page.classList.remove('active');
                if (page.id === pageId) {
                    page.classList.add('active');
                }
            });
            
            // 在移动设备上点击后关闭侧边栏
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        });
    });
    
    // 媒体查询：电脑端默认开启导航栏
    function checkScreenSize() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('open');
            // 电脑端不需要关闭按钮
            closeBtn.style.display = 'block';
        } else {
            // 手机端显示关闭按钮
            closeBtn.style.display = 'block';
        }
    }
    
    // 初始检查和窗口大小变化监听
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
});