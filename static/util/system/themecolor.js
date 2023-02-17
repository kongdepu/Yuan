const root = document.querySelector(":root");

/**
 * 获取主题颜色
 *
 * @returns 结果
 */
function getThemeColor() {
    const computedStyle = getComputedStyle(root);
    return computedStyle.getPropertyValue("--theme-color");
}

/**
 * 设置主题颜色
 *
 * @param {*} themeColor 主题颜色
 */
function setThemeColor(themeColor) {
    root.style.setProperty("--theme-color", themeColor);
}