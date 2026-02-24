/**
 * 3D设计师作品集网站 - 图片修复脚本
 * 
 * 此脚本用于在浏览器端动态生成占位图片，解决图片无法显示的问题。
 * 使用方法：在HTML文件的末尾，`</body>`标签前引入此脚本。
 */

document.addEventListener('DOMContentLoaded', function() {
    // 项目数据
    const projects = {
        '练习作品': { color: '#FF6B6B', icon: 'fa-cube' },
        '无刺激面霜': { color: '#4ECDC4', icon: 'fa-leaf' },
        '智能便携吹风筒': { color: '#FFD166', icon: 'fa-wind' },
        '智能控制面板': { color: '#6A0572', icon: 'fa-microchip' },
        '未来VR头显': { color: '#1A535C', icon: 'fa-vr-cardboard' },
        '交织球体': { color: '#FF9F1C', icon: 'fa-circle' },
        '翡翠核心': { color: '#2EC4B6', icon: 'fa-gem' },
        '彩色立面': { color: '#E71D36', icon: 'fa-cubes' },
        '设计师头像': { color: '#011627', icon: 'fa-user' }
    };

    // 获取所有的图片元素
    const images = document.querySelectorAll('img');

    // 为每个图片创建占位图
    images.forEach(img => {
        // 获取图片的alt属性，用于生成占位图
        const alt = img.getAttribute('alt') || '3D Design';
        let projectName = alt;
        
        // 从alt中提取项目名称
        for (const key in projects) {
            if (alt.includes(key)) {
                projectName = key;
                break;
            }
        }

        const project = projects[projectName] || { color: '#333', icon: 'fa-picture-o' };

        // 创建一个占位图容器
        const placeholder = document.createElement('div');
        placeholder.className = 'placeholder-image';
        placeholder.style.width = img.offsetWidth || '300px';
        placeholder.style.height = img.offsetHeight || '200px';
        placeholder.style.backgroundColor = project.color;
        placeholder.style.display = 'flex';
        placeholder.style.alignItems = 'center';
        placeholder.style.justifyContent = 'center';
        placeholder.style.color = 'white';
        placeholder.style.fontFamily = 'Arial, sans-serif';
        placeholder.style.fontSize = '16px';
        placeholder.style.textAlign = 'center';
        placeholder.style.borderRadius = '4px';
        placeholder.style.position = 'relative';
        placeholder.style.overflow = 'hidden';

        // 创建图标
        const icon = document.createElement('i');
        icon.className = `fa ${project.icon}`;
        icon.style.fontSize = '48px';
        icon.style.marginBottom = '10px';

        // 创建文本
        const text = document.createElement('div');
        text.textContent = projectName;
        text.style.fontSize = '14px';
        text.style.fontWeight = 'bold';

        // 创建内容容器
        const content = document.createElement('div');
        content.style.display = 'flex';
        content.style.flexDirection = 'column';
        content.style.alignItems = 'center';
        content.style.justifyContent = 'center';

        content.appendChild(icon);
        content.appendChild(text);
        placeholder.appendChild(content);

        // 隐藏原始图片
        img.style.display = 'none';

        // 将占位图插入到原始图片的后面
        img.parentNode.insertBefore(placeholder, img.nextSibling);

        // 添加鼠标悬停效果
        placeholder.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        placeholder.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // 处理背景图片
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.backgroundColor = '#011627';
        heroSection.style.backgroundImage = 'none';
        
        // 添加标题和副标题
        const title = document.createElement('h1');
        title.textContent = '3D 设计师作品集';
        title.style.color = 'white';
        title.style.fontSize = '3rem';
        title.style.fontWeight = 'bold';
        title.style.marginBottom = '1rem';

        const subtitle = document.createElement('p');
        subtitle.textContent = '探索未来设计的无限可能';
        subtitle.style.color = '#FDFFFC';
        subtitle.style.fontSize = '1.5rem';

        // 创建内容容器
        const content = document.createElement('div');
        content.style.display = 'flex';
        content.style.flexDirection = 'column';
        content.style.alignItems = 'center';
        content.style.justifyContent = 'center';
        content.style.height = '100%';

        content.appendChild(title);
        content.appendChild(subtitle);
        heroSection.appendChild(content);
    }

    console.log('占位图片已生成');
});