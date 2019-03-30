const containerHtml=`
    <div class="cm-contact-us-container">
        <div class="cm-contact-us-content">
            <div class="cm-button-container">
                <div class="cm-button" id="cm-contact-button">
                    <img src="img/z_qq.png"/>
                    联系我们
                </div> 
            </div>
            <div class="cm-pop-container animated cm-bounce-in-up" id="cm-contact-pop" data-show="false">
                <div class="cm-title">在线咨询请添加客服<br> QQ群528057101</div>
                <div class="cm-qr">
                    <img src="img/z_qr-code.png"/>
                </div>
            </div>
        </div>
    </div>
`,css=`
    @keyframes cmBounceInUp {
        from,
        60%,
        75%,
        90%,
        to {
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
    
        from {
        opacity: 0;
            transform: translate3d(0, 10px, 0);
        }
    
        60% {
        opacity: 1;
            transform: translate3d(0, -5px, 0);
        }
    
        75% {
            transform: translate3d(0, 5px, 0);
        }
    
        90% {
            transform: translate3d(0, -2px, 0);
        }
    
        to {
            transform: translate3d(0, 0, 0);
        }
    }
  
    .cm-bounce-in-up {
        animation-name: cmBounceInUp;
    }

    .animated {
        animation-duration: 1s;
        animation-fill-mode: both;
    }

    .cm-contact-us-container{
        position:fixed;
        right: 50px;
        bottom: 50px;
    }

    .cm-contact-us-container .cm-contact-us-content{
        position:relative;
    }

    .cm-contact-us-container .cm-button-container .cm-button{
        font-size: 14px;
        padding: 0 14px;
        line-height: 40px;
        text-align: center;
        border-radius: 100px;
        color: #FFFFFF;
        background: #0069C4;
        border: 1px solid rgba(0,0,0,.05);
        text-shadow: 0 1px 2px rgba(0,0,0,.15);
        cursor:pointer;
        transform-origin: center bottom;
        transition: all .2s ease-out;
    }

    .cm-contact-us-container .cm-button-container .cm-button:hover{
        transform: scale(1.05);
    }

    .cm-contact-us-container .cm-button-container .cm-button img{
        height:20px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;
    }

    .cm-pop-container{
        border-radius: 4px;
        background: #FFF;
        position: absolute;
        width: 168px;
        height: 190px;
        top: -205px;
        left: 50%;
        margin-left: -84px;
        box-shadow:0 3px 10px rgba(0, 0, 0, 0.15);
        display:none;
    }

    .cm-pop-container:before{
        content: ' ';
        position: absolute;
        bottom: -5px;
        left: 50%;
        width: 10px;
        height: 10px;
        border: 1px solid #d8dde4;
        border-right-color: transparent;
        border-bottom-color: transparent;
        transform: rotate(-135deg);
        background: #fff;
        z-index: 1;
        margin-left: -6px;
        border-radius: 2px;
    }

    .cm-pop-container .cm-title{
        color:#2a465e;
        font-size:12px;
        line-height:17px;
        padding:10px 0;
        margin:0 14px;
        border-bottom:.5px solid #d8dde4;
        text-align:center;
    }

    .cm-pop-container .cm-qr{
        padding:7px;
    }

    .cm-pop-container .cm-qr img{
        width:100%;
    }
`,pop=()=>{const a=document.getElementsByTagName("body"),b=document.createElement("div"),c=document.createElement("style");document.body.appendChild(b),document.head.appendChild(c),b.innerHTML=containerHtml,c.innerHTML=css;const d=document.getElementById("cm-contact-button"),f=document.getElementById("cm-contact-pop");d.addEventListener("click",a=>{const b=f.getAttribute("data-show");"false"===b?(f.style.display="inherit",f.setAttribute("data-show","true")):(f.style.display="none",f.setAttribute("data-show","false")),a.stopPropagation(),a.preventDefault()}),window.addEventListener("click",()=>{const a=f,b=a.contains(event.target)||a===event.target;b||(f.style.display="none",f.setAttribute("data-show","false"))},!1)};pop();