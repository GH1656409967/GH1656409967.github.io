const pjax=new Pjax({selectors:["head title",'script[type="application/json"]',".main-inner",".post-toc-wrap",".languages",".pjax"],analytics:!1,cacheBust:!1,scrollTo:!CONFIG.bookmark.enable});document.addEventListener("pjax:success",(()=>{if(pjax.executeScripts(document.querySelectorAll("script[data-pjax]")),NexT.boot.refresh(),CONFIG.motion.enable&&NexT.motion.integrator.init().add(NexT.motion.middleWares.subMenu).add(NexT.motion.middleWares.postList).bootstrap(),"remove"!==CONFIG.sidebar.display){const t=document.querySelector(".post-toc");document.querySelector(".sidebar-inner").classList.toggle("sidebar-nav-active",t),NexT.utils.activateSidebarPanel(t?0:1),NexT.utils.updateSidebarPosition()}})),document.addEventListener("pjax:success",(()=>{document.querySelectorAll(".post-body :not(a) > img, .post-body > img").forEach((t=>{const e=$(t),a=e.attr("data-src")||e.attr("src"),o=e.wrap(`<a class="fancybox fancybox.image" href="${a}" itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>`).parent("a");e.is(".post-gallery img")?o.attr("data-fancybox","gallery").attr("rel","gallery"):e.is(".group-picture img")?o.attr("data-fancybox","group").attr("rel","group"):o.attr("data-fancybox","default").attr("rel","default");const r=e.attr("title")||e.attr("alt");r&&(o.next("figcaption").length||o.append(`<p class="image-caption">${r}</p>`),o.attr("title",r).attr("data-caption",r))})),$.fancybox.defaults.hash=!1,$(".fancybox").fancybox({loop:!0,helpers:{overlay:{locked:!1}}})}));