const mainAside = document.getElementById('mainAside')

const mainAsideObj = {
    menuState : true,
    navHead : {
        appLogo: 'iMM-logo',
        appName: 'Reminders'
    },
    navItems: [
        { icon: 'iMM-paryer', title: 'Prayer', route: '#prayer', active: true},
        { icon: 'iMM-dashboard', title: 'Dashboard', route: '#dashboard', active: false},
        { icon: 'iMM-tasks', title: 'Tasks', route: '#tasks', active: false},
        { icon: 'iMM-reminders', title: 'Reminders', route: '#reminders', active: false},
        { icon: 'iMM-MyPocket', title: 'My Pocket', route: '#pocket', active: false},
        { icon: 'iMM-Categories', title: 'Categories', route: '#categories', active: false},
        { icon: 'iMM-Archives', title: 'Archive', route: '#archive', active: false}
    ]
}
function menuState (state) {
    if (state) {
        mainAside.style.width = "80px"
        mainAside.style.transition = "all ease-in-out 300ms"
        mainAsideObj.menuState = false
    }
    else{
        mainAside.style.width = "462px"
        mainAside.style.transition = "all ease-in-out 300ms"
        mainAsideObj.menuState = true
    }
    Render()
}
function mainAsideTemplate () {
    let myTemp = `
    <header id="mainAsideHeader" class = 'MM-Aside-header-BG MM-Aside-header d-flex align-items-center mb-4 overflow-hidden', style="font-size:29;">
        <i class='${mainAsideObj.menuState? mainAsideObj.navHead.appLogo : ''} ${mainAsideObj.menuState? 'd-inline-block': 'd-none'} iMM-sizes  uMM-image-contain mx-4 '> </i>    
        ${mainAsideObj.menuState? mainAsideObj.navHead.appName : ''}
        <i class= 'iMM-menu uMM-image-contain iMM-sizes ml-auto d-inline-block mx-4  uMM-click' onclick='menuState(${mainAsideObj.menuState})'></i>
    </header>
    <ul style="padding: 0;">
    `
    for (let item of mainAsideObj.navItems ) 
    {
        myTemp += `
            <li class = "uMM-click MM-aside-items cf-MM d-flex align-items-center">
            <i class = "${item.icon} iMM-sizes  uMM-image-contain mx-4 d-inline-block"></i>
            ${mainAsideObj.menuState? item.title: ''}
            </li>
        `
        console.log(item.title)
    }
    myTemp += `</ul>`
    return myTemp
}
function Render() {
    mainAside.innerHTML = mainAsideTemplate()
}
Render()
