const mainAside = document.getElementById('mainAside')
const asideObj = {
    menuState : true,
    navHead : {
        appLogo: 'iM0-logo',
        appName: 'Reminders'
    },
    navItems : [
        { icon: 'iM0-paryer', title: 'Prayer', route: '#prayer', active: true},
        { icon: 'iM0-dashboard', title: 'Dashboard', route: '#dashboard', active: false},
        { icon: 'iM0-tasks', title: 'Tasks', route: '#tasks', active: false},
        { icon: 'iM0-reminder', title: 'Reminders', route: '#reminders', active: false},
        { icon: 'iM0-pocket', title: 'My Pocket', route: '#pocket', active: false},
        { icon: 'iM0-categories', title: 'Categories', route: '#categories', active: false},
        { icon: 'iM0-archive', title: 'Archive', route: '#archive', active: false}
    ],
    user : {
        userImage : "iM0-userImage",
        userName : 'User Name',
    }
}
function readyRouter(){
    let hash = window.location.hash
    for (let [index, item] of asideObj.navItems.entries()){
        item.route == hash ? toggelActive(index) : false
    }
}
function router(index){
    let route = asideObj.navItems[index].route
    window.location.hash = route
}
function toggelActive(index){
    for (let item of asideObj.navItems){
        item.active = false
    }
    asideObj.navItems[index].active = true
    componentRender() 
}
function openClosemenu(e){
    let menuState = asideObj.menuState
    switch (menuState){
        case true: // close
            mainAside.style.width = '80px'
            asideObj.menuState = false
            componentRender()
            break;
        case false: //open
            mainAside.style.width = '462px'
            asideObj.menuState = true
            setTimeout(function(){
                componentRender()
            },200)
            break;
    } 
}
function mainAsideTemp(){
    let myTemp = ` 
                    <section class='fM0-size-a fM0-weight-a overflow-hidden d-flex flex-column h-100'>
                        <header class='M0-aside-header cM0-bg-white d-flex align-items-center mb-4'>
                            <i class='${asideObj.navHead.appLogo} ${asideObj.menuState ? 'd-inline-block' : 'd-none'} iM0-size-a  uM0-image-contain mx-4'></i>
                            ${asideObj.menuState ? asideObj.navHead.appName : ''}
                            <i onclick='openClosemenu(event)' class='uM0-click iM0-menu ml-auto iM0-size-a d-inline-block uM0-image-contain mx-4'></i>
                        </header>
                        <ul class='p-0'>
                `
        for (let [index, item] of asideObj.navItems.entries()){
            myTemp += `<li onclick='toggelActive(${index}); router(${index})' class='${item.active ? 'cM0-bg-main' : false} uM0-click M0-aside-items cM0-white d-flex align-items-center'>
                    <i class='${item.icon} iM0-size-a d-inline-block uM0-image-contain mx-4'></i>
                    ${asideObj.menuState ? item.title : ''}
            </li>`
        }
        myTemp += `
                        </ul>
                        <div class=' cM0-bg-main-25 d-flex mt-auto align-items-center pt-4 pb-2'>
                            <i class=' ${asideObj.user.userImage} iM0-size-b d-inline-block uM0-image-contain mx-4'></i>
                            <p class='m-0'>${asideObj.user.userName}</p>
                            <i class='iM0-logout iM0-size-a d-inline-block uM0-image-contain mr-4 ml-auto'></i>
                        </div>
                    </section>
                `
    return myTemp
}


function componentRender(){
    mainAside.innerHTML = mainAsideTemp()
}
function domReady(){
    readyRouter()
}
componentRender()
domReady()