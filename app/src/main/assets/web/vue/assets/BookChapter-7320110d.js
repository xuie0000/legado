import{a2 as We,n as r,z as w,T as Se,a5 as Le,o as p,d as f,g as e,t as O,F as te,P as ce,u as o,a6 as G,a7 as Fe,a8 as Je,v as V,e as T,w as J,a9 as Te,A as he,aa as qe,f as Z,M as ge,ab as Ge,x as Ze,ac as Ke,p as we,i as _e,s as ze,ad as Ye,V as je,K as Xe,a4 as $e,O as Me,k as z,c as et}from"./vendor-f0c50eaf.js";import{i as tt,g as Pe,u as ot}from"./loading-50b675c1.js";import{_ as le,u as Ee,A as pe}from"./index-a4be7e77.js";const nt=(a,s,d,u)=>(a/=u/2,a<1?d/2*a*a+s:(a--,-d/2*(a*(a-2)-1)+s)),st=()=>{let a,s,d,u,n,x,m,_,h,C,i,I,A;function b(){let v=a.scrollTop||a.scrollY||a.pageYOffset;return v=typeof v>"u"?0:v,v}function l(v){const B=v.getBoundingClientRect().top,Y=a.getBoundingClientRect?a.getBoundingClientRect().top:0;return B-Y+d}function k(v){a.scrollTo?a.scrollTo(0,v):a.scrollTop=v}function L(v){C||(C=v),i=v-C,I=x(i,d,_,h),k(I),i<h?requestAnimationFrame(L):M()}function M(){k(d+_),s&&m&&(s.setAttribute("tabindex","-1"),s.focus()),typeof A=="function"&&A(),C=!1}function oe(v,B={}){switch(h=B.duration||1e3,n=B.offset||0,A=B.callback,x=B.easing||nt,m=B.a11y||!1,typeof B.container){case"object":a=B.container;break;case"string":a=document.querySelector(B.container);break;default:a=window}switch(d=b(),typeof v){case"number":s=void 0,m=!1,u=d+v;break;case"object":s=v,u=l(s);break;case"string":s=document.querySelector(v),u=l(s);break}switch(_=u-d+n,typeof B.duration){case"number":h=B.duration;break;case"function":h=B.duration(_);break}requestAnimationFrame(L)}return oe},$=st();const at=["data-chapterpos"],it=["src"],ct=["innerHTML"],lt={__name:"ChapterContent",props:{chapterIndex:{type:Number,required:!0},contents:{type:Array,required:!0},title:{type:String,required:!0},spacing:{type:Object,required:!0},fontFamily:{type:String,required:!0},fontSize:{type:String,required:!0}},emits:["readedLengthChange"],setup(a,{expose:s,emit:d}){const u=a;We(A=>({"65b266c2":u.spacing.letter,"75882ce0":u.spacing.line,"89939d5c":u.spacing.paragraph}));const n=A=>{const b=/<img[^>]*src="([^"]*(?:"[^>]+\})?)"[^>]*>/,l=A.match(b)[1];return tt(l)?Pe(l):l},x=A=>{A.target.src=Pe(A.target.src)},m=A=>{const b=/<img[^>]*src="[^"]*(?:"[^>]+\})?"[^>]*>/g,l=" ";return A.replaceAll(b,l).length},_=r(()=>{let A=-1;return Array.from(u.contents,b=>(A+=m(b)+1,A))}),h=w(),C=w();s({scrollToReadedLength:A=>{if(A===0)return;let b=_.value.findIndex(l=>l>=A);b!==-1&&Fe(()=>{$(C.value[b],{duration:0})})}});let I=null;return Se(()=>{I=new IntersectionObserver(A=>{for(let{target:b,isIntersecting:l}of A)l&&d("readedLengthChange",u.chapterIndex,parseInt(b.dataset.chapterpos))},{rootMargin:`0px 0px -${window.innerHeight-24}px 0px`}),I.observe(h.value),C.value.forEach(A=>{I.observe(A)})}),Le(()=>{I==null||I.disconnect(),I=null}),(A,b)=>(p(),f(te,null,[e("div",{class:"title","data-chapterpos":"0",ref_key:"titleRef",ref:h},O(a.title),513),(p(!0),f(te,null,ce(a.contents,(l,k)=>(p(),f("div",{key:k,ref_for:!0,ref_key:"paragraphRef",ref:C,"data-chapterpos":o(_)[k]},[/^\s*<img[^>]*src[^>]+>$/.test(l)?(p(),f("img",{key:0,class:"full",src:n(l),onErrorOnce:x,loading:"lazy"},null,40,it)):(p(),f("p",{key:1,style:G({fontFamily:a.fontFamily,fontSize:a.fontSize}),innerHTML:l},null,12,ct))],8,at))),128))],64))}},rt=le(lt,[["__scopeId","data-v-b16ecb88"]]);const At="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXr5djn4dTp49bt59rT6LKxAAACnElEQVQozw3NUUwScRzA8d8R6MF8YMIx8uk47hDSJbj14IPzOGc7jPLvwTGg5uAYDbe2tt56cLtznvEnS6yDqCcEaWi91DvrbLJZz7b1aFtz1aO+2OZWvn+/+4CHeB6BMYaqBLfjPNRY6RFT2JJYby+uAk4WUTrtlmJ4hgPYb2q1XGDQjaK8pgJHvqNaAX+KyuIkDXpgQinb46nOulnn4b5laUHTxLfseeArAoNOeJlOIjdoal0n1FA7tKFv5roK+YaHOqP3P0XyKHPHY+MhTRe5uCZnKhtJKw2eSrSoBDPLtpZuNcFNJcFyiCMxOaaHIfXz1e8HQbWLySrBQ4x0x1qlhnHlnz2HQEC6TNb0gTHXa7IKhcaHqkE015hk9whA0YeWiLIXf7Fa2CZo3DjqjB4tTuF8jIcbfcEx5z/w4sXpQhXW+ju0cqh7icTFmRMaG+v6CIvTjcSpHcH8JEsF3EPh3fRthYdVLLgI2fWXm85/pGFE4l046s70L+yKCcirGFR+jbpy3kMmiCGHrSezVONsn1RBixncyk2PcVWk7DlgxHo8iZwDyq5uAUD854dZhdIFYzKoQig2haUKi1lVufz2RZUZPZ41n/hrOQB6h0Hhg8I367FNoEHgeM/KY7szSeQwD8q2WE3HM35ZLl0K1MJiOtHIkBclRQUwZnyOWcNsRQQgVLj1PSqkjF9DsoOSaSg3iinKzvfmgsNFFfpP/2T3GLGvL4fHEfwIX1sVvXcPqLztehWGcfn9nI2U9nTfCgJPe/jFPLZwgVEzimBgAm0VIyK2tt1cE/AzQdLK+SxLSQ4aDCZnnId94OG2S1XwvnTbNk/ZnhyRCQT+sZM6z9g6LXL1BOBe+zJySiFkHAINCtnQokbCJ/apCv0foqPiZVfhpywAAAAASUVORK5CYII=",dt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAACVBMVEX28ef48+n69esoK7jYAAAB4UlEQVQozw2OsW4bQQxEhwLXkDrysGdEqRRgVShfQQq8wOr2jD0jSpXCLvwXbtKfADlFqgSwC/9ljqweZgYzQFnb/QGepYhA9jzmTc1WaSEtQpbFgjWATI00ZZtIckXx8q2Oe5yEByBy+RHOTcM+VVTadULsvxvRC/q8WTwgcWGD+Mnaqa0oy2gw2pKFzK+PzEsus5hP9AHojKslVynLlioVTBEN8cjDNnZoR1uMGTiZAAN47HxMtEkGUE9b8HWzkqNX5Lpk0yVziAJOs46rK1pG/xNuXLjz95fSDoJE5IqG23MAYPtWoeWPvfVtIV/Ng9oH3W0gGMPIOqd4MK4QZ55dV61gOb8Zxp7I9qayaGxp6Q91cmC0ZRdBwEQVHWzSAanlZwVWc9yljeTCeaHjBVvlPSLeyeBUT2rPdJegQI103jVS3uYkyIx1il6mslMDedZuOkwzolsagvPuQAfp7cYg7k9V1NOxfq64PNSvMdwONV4VYEmqlbpZy5OAakRKkjPnL4CBv5/OZRgoWHBmNbxB0LgB1I4vXFj93UoF2/0TPEsWwV9EhbIiTPqYoTHYoMn3enTDjmrFeDTIzaL1bUC/PBIMuF+vSSYSaxoVt90EO3Gu1zrMuMRGUk7Ffv3L+A931Gsb/yBoIgAAAABJRU5ErkJggg==",ut="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEX6+fP8+/X+/ff///kbczPAAAACeElEQVQozxXHQUgUUQAG4P8936yzs6VvZNZmN9QxVxiF9OLBoOjtOC6rQq6ygXjI2fCQBdXBg4egtzFGdqkoI+zgBFbqkm3hQSxhFYLotOcubeKhOnVYoqQy+m4f5g5TvpX0xHLbLY9j8SMhJp+Jk4LfAUS2kVRIjILmnwGBTX42PhCVlDJQkIiy2nWAvaJ1h+oFIpJ0hMSYVbyyrgDWshcMpMyL1brPDQKWmduO+KTJ6XeXAMK9Yc3FpD7atyNwg6kt5XgFpLPhjUTFSYVn2abDiugGShwD8JTVRJVo/2ecuKtRb/qc4BK+9TboFfokog4T2Fn6Oqdnsjk90NMS76Rji6E0NmwkPBAZ4Xbkw8KoDAkAbEhkc78e9omxxgxg6qa5HvMv+UZbCV0qmHnSHKl5TxeA2XTCGWekR581mwC5crBH81PznASqB9va3TbkYAjJPLfg5uBfXaJgIgIBv9eessRIhxe7PA7kj6uUMeMaQ/OEQOYRaaHlqH2Gxwsl6E/pwVY5FH7uCypBZPKvDQyVziYBrAkMURe2MOOOxG/eQpp5PF+bFzUV5HtPj9GeiVSNZDELleifYTp9NAjsoiXg4cW+4ZORkdSMB/B74aAdjhsVakhgkugsbmqcDSLEoWp8zRjrux3tli6Q5uM3E+maT99Wy0RiP7tboiuRZle2c6CYeL2kcUc1KvPtQKucogMadKVTQOJYCeyCYlhQQ/Q7Etfd/vBygy9iqy+LyHeF46saCYvW6ingsbA9RBWtdi8GgUXW+oQx9/wP6bAAX1TWeV+CbShZDlQ9xT6SoSxZmKRAkmXb60kzEzkRF+Ccb94BGspGJoN/UzmyR4wjXHAAAAAASUVORK5CYII=",gt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAATlBMVEXdzaHh0KPgz6LdzKDezqLczJ7ezZ/fz6Dcy5zi0aXdzZ3fz6Tfz57h0KDg0aLcyZrg0KXi0qPfzZ3j06bh0qbdyJbfzJrhz5/cxpLZwo0vDconAAAFn0lEQVRIxxyPW5LjMAwDAT5FybLl2JnM3P+i6+wXWVC1GoQGaD0h4XM3Q5o4T0HgABHBi6pZ4CDXXcUOFd6VhqC3Kch4EI8w9oMXwvU6m5LOOvcxKMOhuu8i5+5cMjcgb0t4F2uvOoeI3/MlT4IqsbtM9UG2AGSXUOsxzPevnXzK1CSHytZLvx7VdQmUcJsJCxJh2nmHW12Qod1qPjt8pih47uQ9aGpoNWF+yElCt60oH7vdIU/MnlRPSBLC/VwqxcKR8PFqnADN9ih5ufqnTlG9KwCofvs7kKYqOPHTNMQ93j9qNImFw9vjHPZ0F1m8hUUVB/Q/TrRYDMXr9++APMFARAt6sPh6wVAXzxUGhZsFUwCNfPZ8/72TAHebAhvuOuT3gO1Vn5d9Jd5sBRkg0p2seL9B7ulkjFJFIt9HPpLzdSzzMP3UcodAfMqC6pBuET2heHK1itZf1GZ1bi0BwOSxiCS8f/JBHMPMM4XCu3Mt1uz9lJbDJRqsKDZuikzkvskQEz6hanfDfO494azY5JpqPqOF1RhxD9XYEdaNxiqWqakKgmPfmrsta8KAiwF4HBxGVUJAgeSqQaiRRZJ7D2jedhw5t1CIAKxag0CBA60BpoBE6DcUi8O5AuM4pLfN0kHLmeu2B4e6HofqbgxsTWUw3PAODqa1oDtyzgXBlusi1KFdclMPE8O3jvLJ8RNi5/RxDQVzVmXA233XQ4KummunfxvLOZo+iH37964YjP06995CTdu9hsvErqJNzmf4wTrZ5DL7+qW9EoLnadrx67b8dUtrJnBXaT1N1uvPaYRKpWkq52xNsMN7vv4Sdryt/f4MhQoMCKnvVxikai1CQ6ZsnwJDc8+3Y/z8HcfvYQNq66pnAu1Hwa+3KNSwbNu8h3nDPqTl9fl7tx8fBhFfdS0o0F3JUKEZtZG9b/LZEM95lzaR30OnWPzroMxyZYdBIMoMnpN0J+m7/40+/P4soFSUjgzE7yY5zrMJuoZv0CmpVguYx1pprfb5HOviRVhHUVi/352shxCYrYBZxGtVaxiAz/MsaGSIsB7R1t4zJXH//n7RTTQQwxqcGEqEvklFHUgiO2GvJV+jAIPR+N29usWDoiSOVrN3XuqT1egQJAAU9EwslVJC8u0rGcy+WPqktJhjfMpatIG6CDAb0v5H34MGKqiVRue7GGLZ9Otxtt4JIrAhxBDwDuqI9JavcO0A7GlqFt219tH/bln9jBXzaKWAEqJV0CBxs5TwM8EvUPHaa8S86vN303MVWOsl3goDBHPWSoQ9c0kQmCKljfsKNH1+ofEOHW8a9a7glZGS8fPieL/SRSs0LAhI4FDTnXs1QYtubv2+IXPZpHB4bhivRexBkYKsSrYXNjvMUbVXpVJ+N6haV72c1k2zrnv5IYBMJBYTSZx0KTkoM3vY93rU/qs7zHplc/3d2ACadhFWByrn9LUk2IWb5JywvawTQc3F0iz+lgsBmInAIemBJtft2plKIlAFOgcroigrG2XlDsAzywQECNyaI8yr2ogoh7D4qJOYmZBzQgoZAM1PAcB8sDrr1uE5CDMR+nWSSVUGUCHAs8Vd21HOE0FzNj37pX0sLp9p3K8k++xxpkmzDxK64rmTSJnDUuIgTeslui6lg92jonZXI4jqNiUuzN4IagcKMjCniMGCODoo8T4tGDprn2hRww+NrnYiCwokd9iiWrkmbRfXYGLAoZrjO1lVQKExjUy5fIkgJURmz2uGFdASwwlWx5gDVTMK7hP6ISRVsFbYNmqtZL9MQtio285PaekyzDhZmtdexCYB0SZcTmBdhvdbmAEonk8hwcHQuZN1kVqrhyKoHHsnQhQAjF7SG533Da2S4LGjx1LoZqp7XeKQLDUBmYmydG0NQHpMeR5lRIRQc1PQ2ASMQflF4YBDMt0/GFlEHeRwCcEAAAAASUVORK5CYII=",pt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAALVBMVEXx58b168ny6Mjz6sn06sf27Mvw5sTz6cbw5cLy58T37svv47/168v37s7t4Ltrv0//AAAEjUlEQVQ4yw2Ty2sTURxGf3dmOqmPxb0zmaStCnfmZpL6gpmbxIpUSMZGrSJkxsZiVZimNVaqMklrUnWTRq2KIDFWWx+IFrIRFxXEB4KIgqu6EBdu7M6FIPg32PW3+DhwDmBaYrK56KP4HGIsvg/uvOV0wK+qgBMlO9BujuH4DSJlOseqV5a/BEF97gt0ChyIPqBhXI9BtqtIB8vJB/LdCQ3OVjaLNX0g7+OmoI4e7nkemAqX6o8vg0yyQAyQS7IfgvFbI+6QyI3R4KELxw7kwM2ooQfyQigYnwY5MZbMlHI1DvnQVCoVcrt+R+bO7vPDif3ybNajwqAAe443dpfDsPt379VMWZzGRuqM79mQF+DUz9nt74bQ8J/O80MtVR51U02JKKmTCvTzLVf+vuxP/aHnPo9+2bW+zVsJ0Y630/CrfzX+b+UL+7O68Rczv+7lrMh5etfKXvhc2rk6KforxuoO2xB2tcxKfeXHt18rHOiHI/0RRjW/YGRDkHiwo3nzqL60o58C/bgRuaj7vk+QOwOhpnFNdjuWpKMCGP8Yapu9Ty5FTHKQLGSEFikjd9ADwP9ciaNNjc5qMH6w50AF/LKOsOYqsOG9GjKgc7ZXolqntm6fysJ6Ma6ll2CiqmOgE6O7x1wXExklbeqMYcwsmJmOoigt8SBg2WfilDSsAZJcBxDcrqtBXzFQJqZNHfscyIhoZlygAtyYAceah+elrFbI+46gEHDGiW878Kj7JpWyfhg6iyRMymV1MKBSeVpfgLHIohyTojI6sRyK1VpcqzVZeEBLOnA9unhGKUXPJDYtV9Dxuz4iA5xSkSWhCJdAiJR9PHlvfvbntbrR14FDqUNRAYDJmSnv3oKxuz5+7fiblgVJyYLTbgUM05P7LESkoXvyWNfb0aUU6FZizgQIa25VqKQZqFrk6v6BsqqIHlQmkQ9KrBhkC20/DrFsAFEEYLjM+lj2wYHXCwnNvZQR42XJ2iVK+UBXnI+OBE6oXpUUHiQ1yg0MhA03iwGbnOdQYc1CMiPIPQrCQJFH4L4BMFktAtKd9PN5gnU2Gra4KuK+V+mjtBRpAGIqDVe4wnSnajiFGO5d7smvhVQEMEYwqshrENIEaY7YeblJYtsb3QhAHWZCEKK67swwPMKw0If1Ta+6DgHmlgPzcUTSbi3rrv1Y64/BYEMPQ5SDHUOR022B4QRF6xLUPAaPX/V4IDI5N2BMwx4LqO1uO4j6uW7NvM7lATqGAxY/ZHVgoGZbu7SvkNR75x6qGSB23FdouENVwN7sCbewTdsXGrrnQ5ZZKOCOFtMTIzxlPu6eYmtL+nMFmoK7OeXajn86r9sqWbfmvHC4IagE5qfCPGZvLSq5F55hHIxJFa4/vRxHBlz0og4TojU1l/MOHJX17lybdF0mQhFO44JYUNt3UA473IXw/iPfDWtKG5oFSXIF5iU/VnyDSjxxeDk3jAXRyVyGTNB9FxH9qcFDNJpVbt2y9LytUXkK7Py6+z1RezHQqnoY8XcLimmd8dCnBhQCuaGpJCq3SoIlmYvLz8UkWhJw7T8k+Db/DYEKwgAAAABJRU5ErkJggg==",ht="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAD1BMVEX48dr48Nf58tv379X17NJtIBxUAAACFUlEQVQ4y1XRUZakMAgF0Af2AiDWApDZgHZqAV1nZv9rGh7Rj7Y8McUFEg1wvcMESMNVD/neU8Xcaz7nYYkYlYO6Ti82PBI4BvIEg1aj3wKwRvIMgZsUy5LdhCawPFh1sZs4SrlyN9fQKpv8s5dgZ2eLyqqJiu+WkCmUEybXkm3INS01WAiv0PapJ0CZc0SJQUzcWnZYbOOY20iFD8Bk+/j2A3wNxH7GdShFYS5ff237kXh9I9zSkQmIAhOsOSVfJ6DIXTMDaPnzkRJ92S1BQQmXl5LdirgRLLDdcYqcGPwe3QN4xCBiGNbrqq9wpW1XCecChwaQdVOsRDpPCpeoolPdxeXp3WNB9PHVzWBHlygy4NJCCrFHREv6bDt0VGwJZASkpONmm1UseGeFKAQexgaAkrfYWl3AGxWOLL2AIMBNbCXpktmS3k3vHeYjGCPBa43wJTurO3ZFVpQSJdAZGLoHTyk1upkjxMEaIxum3iIARcCa5kSkFAW5fi1mUlL9eyOsaanFmOMruwvEdE3ZYzsRSzo5ewRLXyVPPEvknt8ij4DvCg2O7xOgBCUprEzV4z1WekSpUgI8DT2mrnSOXKRfQavwuKA1F+tFnMKdJSUpMA7wQAifWRkMgjUKKZE4lBl6MCM4B1pq1P4uIjDE6Pq6rL0FnW1nIFmta5vrSvq/Ch4tpqG/ZNyyWa5jZPktq81eYv8Bt5s4iFITOp4AAAAASUVORK5CYII=",ft="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXN383Q4tDP4c/R5NEInCCXAAACVElEQVQozw3Hv2sTYRwH4M/79pJ7bZL2bXqtERJ97zjUpbZDhg6pfC8qibi8hLR0EaJ0EFxaCSWDxjfpj1zrYBcRBKE6SAfBJWsx9i8IQfdQxDlKtA6t2OnhQfN3lbG7ytYRywF8rVoPCNO0X2sQOKDpAnSDK2VwkHgmh5yLGT8qASt+2KofnNt2Xg1gf1UF8AoM6052cRMNaloLZb7RKQGrKKji2OefsZF+VqIvos5ZLVIZCX61JcwUdk56wASVkgQvzPfvmT2twTSwyYaC/Pl/UhAHorFhBgZtL6XdAZRp1tkPwC1NLa9CWs5prLhI85NBQsLdXvjDymG3/EbYfQhVNYqc3TtktQhWLY3ko0QsdMbSEp+64v0NfxyqLbIGdh6M2xHHlLBGqKTyQo4E/nebBgBfe1GpdeywYXc8CT7D3cKXuMXkBy4xN6o5OuKamYp3DVI6uccO9lxgd2CAlJgI2BGgaAgIJV/TYwKqu3WFccjbMuA+bVkWgS2bfnlRbD1Eb1sDyWMmjKYIBgGAWbqKRicfvzBkBIz3V5AKnguWdglQEysQsSuVzOg6ALy1pitA5ykGCsc857BRYcgCSZyFOdvoOigSGoPc5Ta73mgxshIcQE5sHMHd9D7yqITw7JO+GHVMxjhzYLcKPSEgmz3fU+BRy3iYNtiXLaBssCW8KguReqkQOTb3MStV0Ugt4U1eIs1RZWRII6Ww8xeNNItyGGQI4ZMlpg/3lQtkl2JFnBp1imRyFe0kK2Id3PCslMgiQNMS77gvFeDhG3cSkYvheeg/e7ClIh5oh+IAAAAASUVORK5CYII=",mt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXh7eHl8eXj7+Pn8+eTbH1KAAACPElEQVQozxWPQWrbQABF/0xn3JFKQRTZOIuUsbCCbOgdRoYEOauxkYPcTRyTlPQWIxEltrsRwQ6hK9nEQek6F+gNTE/Q3qLLusv34cN7SH3mFicdYW4gNIhJWXPBRVXzjcFD0IqeU4o4PRbAIVjyico0vJpIifqPfL80QN9DAQY5ucRHE/hpHxBldXe9GilaHKcKMlj6pho2zXgkNdBl0oJ8kiF1DSiJF1ZHBJkQr0Dbux/5I42Zp4cFahJDFGeW6/QjBwmFY/Q7vZ2SnoOdW2parv/Cnm81+m0xrEfiVXQ3W4nOXIqVYi3l6AAQBwMFkViVBANMto4enXHPNTkHBB0oVj4r5vHzCWayrgBvxtygDlDB2CNDjd80ZInY69aKVYZcfJ8DW+fWuc+syEODALx+ojqoafHsthTI+ZW27PGpIeo/cR6YKcbqIuIFhHmBrzAovzIOOJk1ucvcDzrMRYGVBH2yvcAOf0KiKwfRovBI3tm/kW1eemtfNWwIIXE2mJNhvoszfmMBfRCv0OPwd2321uDW3nx2q/BDxFVeoN1g7a6Im8yRnoawa8kbdXnU0cHeTMxKfZGlJgvLb3sKsxgglQnDdAfvj9LUnqWRDo0GiUmPwyU7TAsD7wHeIW3Nfy1qVGKoE9NgJCdYCAexNRob9yCn4DAQmXtQuUtera6bEmTTXhZy6h856xi4mnEl6BI9mfISkLbtJyZIMJIAUd5ZOBEu88KRAk71yxfItj/hpIB0Errv4gO1os4/UICf+o3kkqwAAAAASUVORK5CYII=",vt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAD1BMVEX0/PTx+fH2/vbz+/P4//htSO9OAAAC5UlEQVQ4yyWT0QGjMAxDZTsDWKQDmJQBYrgBUsr+M517x0+LRWw9CyA+pC1YzndrMgHaNXVKQ+di13Of1qbur48nWhuRjj8i6ON8e7pNm7zyag/DBTfS9Z4Hup1fUuXMKY4HEE8QOHCByXkIkl7lDT239RtL9quO4JItmmhOAHXg45QuYKrQFLyGJcRvaTw6kQqZy6mkR6JAPFH/XqsQjEDRmUOA+MNLHGyMUT7AHApoAhjgjIJmCxy6XHdf648AWCdGe57IUDazCeTImQOY4/z+eVYVX2IjOw9RydeAeJwl79iGi4HpgQgHEchWraUZLtayu8scq0lHHHUKMY3Ml8hB7CS1jOckDLG9ccgNeX3124phOcjL9fPnWJhTXpLHeG9DRmHnTxHEaHakS2J51lwAJcUraNbuU7q4gMTDQj3Eripc/x+qFM5VEKAB1roQfAkX5/PxqnS2QpOrxfK1Zft0/omV5T+xCSBUAIbEIwUQgvAfxFE1O8dnk233+1UZiqJ1mAbsue6Yt8tF+yOrxC/YrUhzC4qPlE3EbR5hGKhhHdlrg7J9WunV7L7BcYQwAeE59u2tnN1c6gfVYrQiLSZ9OxZdWDXQq0+r0Pbarh3UqGCwauVvbiXuDsNxCtLDdW9rTF8oQYN4EoXXdfmwNguQP26n/tRjDeo+F2W7PjWtfSr6Bn/z+cXOLp4NnMV4RytvSW4B68m+XN9XfZTFGhO/S+cHTuTqZDC21ccA0N7QsePALaDQC3D1f94U9CWo+aq6BjB3v0rxIimBM12296M3aKPHjXLQE9KQKH4By8RHraJ3AgVto2r4xdFqlaPaiAHLl1ZF4P2pI6cYc+K8UZdcmxy7lqGc1IoPxLmIFuIeEZ6j2sQT88muEg1zwrEDTIX5U/ZmcsqfgVlBumiBLF4sAyhf9BFlXOPKLZ4H0iFb3VoHrGhtHTldKrOvP2/reu2zfV8CXMPqzRdlgd0a5eI7WwB/AYcgavcqxXWEAAAAAElFTkSuQmCC",yt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXM2t7O3ODQ3uLR4OTDp25yAAACdUlEQVQozw3P70sTcQDH8c/3/M7NG+j35mnHwjwh4hRy/QFK3zvPNbeIG1koPZmxfj2IDAwihL53zj0JYisfmEHcZJZOiBUG60lZiI8T/ANusuftgQ+kCPIPeMP7hS5mUrV9c1g6MQCAEZ8tDLHwofImAGRlX+SZK3Vu9rRRPuO4PK6/9nA4GIATsxlODS+rdCMhkAZivpYV0LWoQHSLSA4NfUg+6mY+7BKL2++F9LvnrBDYm6JO9i/YO3i/HJTGQ4pdIV82TbEDFG6vGYCd4wZchgK5J2CrKTLE+Tx0v+YGlIbdWJFcQl4ptBN8fUJQN1MCJLcZLYwUVVo+famGGty8EXJF5ofOEDzcodT3/Fb0I5sHmc1ZG7CcSl8COgxlXx09jT05OafjCZLIHJhGIaU6wDZHsuMQ41wbdjmQXbhKnMq1zlXSYrjCnyZblqexA7fC8RxS74tq2P3OxSQwTuJSApH8OZLzBBp1pOe0i3rdyDUA47GySZ31YmC4EQYSXvFSvieORGBxXF9aeVtUWKGS9WMC4Z9Y2uXnJ2nCUXVMbPOYqNYNmGWWQ7Evr+BWC+a0JAMTImcq/S4Z5INdQMeuOqDIMa9beilxfA60iC6sP1INcPDpmHBW8drZHNmqwyddJtVje9q8WGUgWAOzmbU4FCQBFi8B2Wk6pickBnYhJMenmJGuRmtt2IoKq9NuFGbNFR99sHnvrnLsLysKANDIsxbp6RNMAsoDSKuRpMwZbAAzI68QatIjmZ0aImyM3O8/4e2MNlOHZomFsa/fLDsysliHS+nlYLQJMnynxrH8QO4PaAV2Li8B/+52UgeGIVNFYf8B1XG/kFSmLcUAAAAASUVORK5CYII=",Ct="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXh7vLf7PDj8PTm8/ecW+lZAAACZElEQVQozw2RsU8TUQCHfz3fw7MS87jeI7DdmSMpDEoHE+P0HqGkvRR8vb5XC4NpN2RQZqcK9xJkwtriekcggerC4OZADDiT+A+goxv/gfwB3zd8H/T6vYF/pTZkCSmDNd3CBEtmZJP4N+CvvhecDvmntKsvwB17rpbIRTLOEoYkj9KZzRUuJsuBQFwgptyJ3Y7EL4V+ud5LO1UnMeQSSObqisiISZkbQBlliP3qWSk3GPQXjxv6VF2BTDO4ySx1zhuJXbA2wBNJF4t5vH9keg6wu5NvUpLtXrZ3OHC9ZsgVcZdOl38PM1y/L6m8GRiErj4AqezUjHGatGGIgs5NJDHh8Ua1IuB4035haVT6SaYWMoQ0eJ3rB/Gpnr3fB49YAy1Wa21YKqAHOmAveVw6CCMGMZh5bGtVI7jnZaiQNbta1Z+285oSoKoRbta1KZ/1bBdKH/RIxv2pRVpkoCmvpr097RWoo0CpMlTWllIenSjECU8mV43mHx2fIRfH/pncrJm3+58BWdbSqCS07/yiQnvHiCG4ZPGRFeAtfreoOubyctzHvLNHhjNvIhukxQzjU5O6QdOEzUp1Ef4d98Pxz+IPYX0bcpnT52dbedfz8y7C4R89RV+MjJkuCCx7mWDt4eyK/62lQB55xXGJK7p8u6bgRv4hVHylelYGGFs64W94tng8sAIVqSRJBpqRA9rFvAysS+9ak8s7557pz5HR4qhCRmWgplpTRJ+bhYfSAMO8/YBucWPuSdmFFtOnuWqvV2NbF6CJnbhNDzEZ/T0XSDrUydzkZCG1z/oIEyUFYxW/KPXNfwopuHDcO04UAAAAAElFTkSuQmCC",It="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXm9PXq+Pno9vfs+vttWKBGAAACPElEQVQozw3RQWrbQACF4TfCMjPqZgIj4RRaxsZKE0PuMBZ2cLKaCI9RDAXFmJJknUWWI1O1UlamOMHJSjGkuFn3AD2Cr9CepDrAg+/xIxK4QwIqHHQkUhQ/WuphInVIFBojl8QXc012Tgq4RTtVHWVLZVFh1tEoI91uiN4joCqde8Ukn/zGM1B2W4ari2PtTwyw55Ld+Wways54qhGPyS6FzbIT3lIY8WwWdCq56Yolx6KmSKzoqrsCB5heAp4TGNQWJ1Pc6XlE5jQD5OlIX9I47A9uiUQcPQxcury/ToyxWJG/za6ki88crxKPocKS59Sl3EtBG7C89fCGflpfqoSzCeC4crioJA7F0V5+8MaSIk4qSCdwzpogmbqzEirVpGiS2dOVJvUuuqFEmhHao06KEpq+8lvHI14NJk3Qrmi9vBuRLwAz0qZB4hsDXQFXgtnlpDX3C6ug9BquSw/CYtwAzuTz5vuQNdr/YibhR68378ehZH30FSpjh71LpQkrsj+Q062h5WwZ5wlRoD6uQJy1DqvSYuCUapMBqT5YA4ZFw4KlWapxoUGlKWrx0eDQvmigu4WMYt97ruru98fYL8/0lG6CTOFcFWBhFK5gKw19h2JN808nh7xhkU6sWKLXdtkqBL6h+lULK5k19wFB/FldnGYf3LDeuf6IC2/MzJOSOP0qPxLqzaGIqtBcFIItrstkazONOkrc1D1czjuwEGESB4JJnjgSMN7PXAu7fZQpl1C236C+9mM4Af8P98Ch4R2TRl8AAAAASUVORK5CYII=",bt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXPz8/R0dHT09PU1NToNyAhAAACdElEQVQozw3NP0xTQQDH8d9d7sFrG+QeKVgQ4aoFCwFkYERyLY//0UB8GNGg1WAC0RBGJrzW4mCXQmpgvCYOwEAYiulSpYtza2KiW7s5FgNJFSV2/CzfL7RwpoJ20iadmgA8owOyaxmusKE44scBeb4vIv00dqYgmf6jzWcr7W6INbDQeZbQL9ytXeYgtFfzmW1Fek5msxJlwhyt6qDDxOLQzpVPompYrMPnEnhvLm7M5BxY5nowAj3zkydAkpC0FIG6g7AK+Ub25ybyNWVYwtpseP2rfrQwiGRpfqrnMuPeuvr2dA0p2YsHF2XghkrXKtZ8tLBjR7S2qIaYbKmyLd/QP+EogLjqqwNw5Lq1pDlMLkM5+gNoSvdq+Pxmz9/61EFq6GYM6GqaGvlN95zy3gsmEWI8K3k8OP9OmRLEPO6DP3Wv3g42COinJTZ33dcIvs4ESp6opMTjDs6mcYTEbFeUifuxh989yZrIx4lkpuixxz0nHLCekKbE17suKhYkMGhoYhTZtVBvg4bfq/1L1Im0AGMVpBFwumM0zwyuKiCMi5dqR4Flx47AGyF2xTbxqUdTwCH94BT3DozpLV5WuAL/N8rGtHKjotBOOuOtCJ9E21uqsyBoLOzaXbHPrK5PQBP+fBfeidvJAeMIAmzVt5IkJJ9DBWaZDAepYUhlQqHt0h72SJ3j8TZHom64f516xx9T5evgMPgwG82jZdJaJIDyWp6LAjOCclVyzNA3iTKzIULlBQEPaTXlPHok5gISclmyaWZlqY2aTHdRHpJOwTdDEQ3ZfKtbpclcNhyVClagmY+fIfyKukntPqBgnx5QvZHk/D/MK8JMClrSigAAAABJRU5ErkJggg==",kt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXe3t7a2trc3Nzg4OCXP9lCAAACoklEQVQozwXBzU/TYBwA4N+QEr4CNbSFwcFuowSqMRvEAwShHWAYNsu7dS0dLnGUSWT4kZB4lGzE4VtcwgIDJqcOWLJxcv4BOoQZuCPxSNSD4WSWLJGL8XmAIiyo2RgJ4A1pxQQlOxRAszLTdnPu2oQGb05RC5slJld7ZAIfo4O44Bn1ud59F0BcjnYOa17Jhwc6EdiKettncsXjT1f8KUBZUW41pK0Jc1Az4dEV3rkkPBtDSZ83Blyt0kSf2PRjzIykoBwINisPbPPtljdVE9iAXRfUPkXLVIgYrCccp5g687NdZbcJ+xa5VE/HhTtT23IKsN5jj/pcUd0dTZNAqCVw72n4gOwnTOC0vvHfaauT8d9zAoRRfPpISZRVyUiw8ELzOG1b2DZpFzkSrHLhq52twDEdyZHwvp2j4uv/bjvOf23/AcEtTuJbY5Cp4YcAer1IGkUzOo2rn8LQOKjFJw3NTw24nprQXY5aF4wxcqcSdbFQ00H4xFl8Drx4X4CikvAM1tuR8bKIBCBoLnKN10KJG4zKAsc7c9WEB9gnCi6BhVjqoco6t20ILAJuVctvaEZK732cRHDRmGfuihOam0o2CHByUZ/epCcVlRs2wmCnMqsd6aSim3ibBJtm1LGyXW3Bb7tJCPlFtUG+SvPdeEUAB60lNdo+VQbLcwRNVtT68FsLcr1+NotgNihlpExS1V2SFgNbeC8bEhgm8sM17wSi6Us2gxVWJU/5GKBpandvfyYbU1yHCLpCgWGbbPXn40rehEsUXKIJr9DMKgICfjc4bl1YfvUhE/YIECGRqjCxSM9hrybAIkND5OeWfFZsXkxB+qDzb7pUQ3EfQ3Ml6EChEt3D+iS01VqC7EQ/Z/DuPQcz4yChoFQJce2Qr+NNAv0HxofmpXGqgHkAAAAASUVORK5CYII=",Bt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAD1BMVEXm5ubo6Ojp6enr6+vt7e1FnZagAAACrklEQVQ4yx1SixUbMQgT3AKAFwDcAfzpBN1/qMrJS5w7bCQhC6IGSUGYQJd6Ox9ZPXi1AGJBavhUTT0JjYPGAab9WcDYIxsmlnxkayX8mhxCmKHA75az5cfRbWybEExiu08xDSgGym0mwuf3j4SvHeQxDJJzh2zp4iOlrD8iOb4SXyC1wiOLRTcnrje+nGamFeXVKWkmzbFIPChkmJ6Fg7mBpV8n+JGOVCd4jv1thThkjeQGNeafpeV3rsEWLfyWc8tC9jOv6FQ8rRzHOOVB+jCYEUAJpDvh8xHNFm/Tm5p5lw94Pp3NhtKEfQsGvnXhowdZE73hPwxKvjDd4i4PCdd0fe3W5fO8ktAsUAacLgstpUw60JCiPLg2XpkgiqPIYYXJd9ksGIT3q+LlevypzItvO+s0F1dBzVr2QDMUkYmuyGcrIS44mVJ7JVKwQXjYuBYp0Uetecbswzsikzu3gUR8bJC/C8Gd/NAzI/xdUGOYQQHDZ8X2d5XuzGRUiXAi9si5CRgoiToRZPtzLJkd0FUHRHZwJf0BHT1sE7gcnh0jmKKlSSF4/GBirGk5+K9NKlGDCfc9JtPhg78JdabH0YQRKNZnJ8tFnPfXHJb4xum1TTCeEmyEdbyEJLjznMLHuFD2Y9NEkSleIBs7SiCbblhgctVi9ch++kDYnn1C9DA5TvdPsToXM55wI6k+8eKT1blwPTqWb5CFJ+7dTBmab+KHy+xwNtItXhZNSpHD2fxnynrxG3ZBKRe8KBpXk11AnadlccEhr9w1nBBvBylNkv7A8eqpGBCDqhitmWQXBjjdS6idr/QjXWLDeMzMbVDoJuM8zN7WenMZWXgZ2vX3F01J3jHZbwk1LRP+DWEvDJtOUoh/AIaBUz5VpWyhuyx4QtgL/NmgC6kM/JvNe+R/C/5aL7BKIbYAAAAASUVORK5CYII=",St="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAElBMVEUQERMODxESFBYWGBkaHB0eICLm6ozJAAACkUlEQVQ4yyWTUdLbMAiEASfvoOkBkBy/O5keIE0v8E/uf5h+68qZWALELgu2MG9PP9qyvCzTVhrrsPGOCjvTfXQZvtp/W3Gy6LCITqs4q/DZ+KYl76zKzHVYpY2wNY27nqN1sbLGcrLH3/ENH4oWlGctsDu8AO+HzTLlsYdh8MzP1m6YDMz0ACfcimvakBj+mwO/+5Uta5teOD379sxK1fUxmUhv8MU3jUT5gs26PMephFznkLcpQZ6/dPL9C/GWHcCxDN6oZhD5xBm5qoYBPA+PFE/H1tXDWcWl8TW7rS+4dUzAVy0BIrvC4/HcqW2TkG1HO8q9dC23INAg7NA4AFRFkDTM2lfELPyFzi1VddcpX2z0KjHBUDmdLNJ6dDps4ytrX+FPsZwE31wSL+6OWfHOAJ3+Y0Rk/MiKfmWNPg7oVP/U3Ck9FoCkC2gBpALOiqbMNTkOe8P4FWkTD2Y9Q3+5VmV0uLUJBl68U5uAK2Kl6QDXvLxbwweOL2sixW78uU8p0ysfc7cWrF1j6B1sPJ4WgclYSnJN1bzozrhEcFHmRzBkbJWqqdG+EYJXRFmT5jnLXPUNF6WBdoFbTxYsmDXVLU/WA7MExNc93sJS5hIXDeLxzMScHzdhKvEkibr6cQXYPrmtmTA7JcInISrTzRDvShTdka0uVGrsJAAR6tSn1sKziZtfKVjAxPrJsYgZO0bye+vKTZ/DgoAoLGNO6jYHimZYTL/3pLJHawquJukjBpfz8WOGVSVIWx9ywUfS5iENutidRM4NzkAmxgUSQ68xgNOU+ZLalr4TS2V+D2xqukZig+Z9DilR7Nouzwp1cp/3E5q6Rdlf08obKvAM4qZ6pMr+w3PmQALSSBfjyZn5DwrNRVbywBQiAAAAAElFTkSuQmCC",wt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEUWGBkYGhsdHyAfISI1t/v6AAAB5ElEQVQozxXQsYoTURSA4f/EeycZsDgDdySDjihk38Hy3GWi2J2BCaziQhaiaB+tt9AFu1kwvYUPsIXNPoB9BAUfwAfwEUzKv/v4odGrroyp9/rUaC6rZ5skv5F8qPsfYYP+yKUMymmAEEeW55oUR4o8jr05KNzJ07yvB7w0KKfLwcQUSjfmMU0PJfPHFoEVU+ohNrcKMEzMQ23FDnVSI2dqtYWI7KlLu6vE4UnyvKc3SJuL7lBbeEEl42ItpGLjzIT8PRJCmkRjVpVpsbJFVN0687okJNZiHAr5Z7MV0BnGIDc+THM1zlbieBc1Fq+tH5BH+OpnbWkj40hSqC8Lw2TvFuF0SUFJCk2IytXbjeqcRAt6NHpnrUkUU4KRzZs8RCK8N/Akn2W04LwxMU/V7XK0bDyN2RxfDyx7I4h5vjZby72V8UnOWumZL3qtYc+8DTE0siSBMXGhywx2dMYPnQHbxdFZ7deiNGxCCtD/QWnbwDoGhRYPDzUdUA3krjpnkvdAgDN4ddLkEQSov9qjd42HaDjI34gEqS9TUueAk+sc4qg5ws407KQYKs8G1jv4xBlqBVk6cb4dISZIwVi1Jzu4+HLk6lyfUxkXvwy+1Q+4WVdHIhwfybZ6CWVhxMEhShOgsP/HOW0MvZJeFwAAAABJRU5ErkJggg==",_t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEUWGBkYGhsdHyAfISI1t/v6AAAB5ElEQVQozxXQsYoTURSA4f/EeycZsDgDdySDjihk38Hy3GWi2J2BCaziQhaiaB+tt9AFu1kwvYUPsIXNPoB9BAUfwAfwEUzKv/v4odGrroyp9/rUaC6rZ5skv5F8qPsfYYP+yKUMymmAEEeW55oUR4o8jr05KNzJ07yvB7w0KKfLwcQUSjfmMU0PJfPHFoEVU+ohNrcKMEzMQ23FDnVSI2dqtYWI7KlLu6vE4UnyvKc3SJuL7lBbeEEl42ItpGLjzIT8PRJCmkRjVpVpsbJFVN0687okJNZiHAr5Z7MV0BnGIDc+THM1zlbieBc1Fq+tH5BH+OpnbWkj40hSqC8Lw2TvFuF0SUFJCk2IytXbjeqcRAt6NHpnrUkUU4KRzZs8RCK8N/Akn2W04LwxMU/V7XK0bDyN2RxfDyx7I4h5vjZby72V8UnOWumZL3qtYc+8DTE0siSBMXGhywx2dMYPnQHbxdFZ7deiNGxCCtD/QWnbwDoGhRYPDzUdUA3krjpnkvdAgDN4ddLkEQSov9qjd42HaDjI34gEqS9TUueAk+sc4qg5ws407KQYKs8G1jv4xBlqBVk6cb4dISZIwVi1Jzu4+HLk6lyfUxkXvwy+1Q+4WVdHIhwfybZ6CWVhxMEhShOgsP/HOW0MvZJeFwAAAABJRU5ErkJggg==";var ee={themes:[{body:"#ede7da url("+At+") repeat",content:"#ede7da url("+dt+") repeat",popup:"#ede7da url("+ut+") repeat"},{body:"#ede7da url("+gt+") repeat",content:"#ede7da url("+pt+") repeat",popup:"#ede7da url("+ht+") repeat"},{body:"#ede7da url("+ft+") repeat",content:"#ede7da url("+mt+") repeat",popup:"#ede7da url("+vt+") repeat"},{body:"#ede7da url("+yt+") repeat",content:"#ede7da url("+Ct+") repeat",popup:"#ede7da url("+It+") repeat"},{body:"#ebcece repeat",content:"#f5e4e4 repeat",popup:"#faeceb repeat"},{body:"#ede7da url("+bt+") repeat",content:"#ede7da url("+kt+") repeat",popup:"#ede7da url("+Bt+") repeat"},{body:"#ede7da url("+St+") repeat",content:"#ede7da url("+wt+") repeat",popup:"#ede7da url("+_t+") repeat"}],fonts:["Microsoft YaHei, PingFangSC-Regular, HelveticaNeue-Light, Helvetica Neue Light, sans-serif","PingFangSC-Regular, -apple-system, Simsun","Kaiti"]};const c=a=>(we("data-v-ed0bb531"),a=a(),_e(),a),Et=c(()=>e("div",{class:"settings-title"},"设置",-1)),Dt={class:"setting-list"},xt={class:"theme-list"},Ut=c(()=>e("i",null,"阅读主题",-1)),Qt=["onClick"],Vt={key:0,class:"iconfont"},Rt={key:1,class:"moon-icon"},Mt={class:"font-list"},Pt=c(()=>e("i",null,"正文字体",-1)),Lt=["onClick"],Ft={class:"font-list"},Kt=c(()=>e("i",null,"自定字体",-1)),zt=c(()=>e("p",null," 请确认输入的字体名称完整无误，并且该字体已经安装在您的设备上。 ",-1)),Ot=c(()=>e("p",null,"确定保存吗？",-1)),Nt={style:{"text-align":"right",margin:"0"}},Ht=c(()=>e("span",{type:"text",class:"font-item"},"保存",-1)),Wt={class:"font-size"},Jt=c(()=>e("i",null,"字体大小",-1)),Tt={class:"resize"},qt=c(()=>e("em",{class:"iconfont"},"",-1)),Gt=[qt],Zt=c(()=>e("b",null,null,-1)),Yt={class:"lang"},jt=c(()=>e("b",null,null,-1)),Xt=c(()=>e("em",{class:"iconfont"},"",-1)),$t=[Xt],eo={class:"letter-spacing"},to=c(()=>e("i",null,"字距",-1)),oo={class:"resize"},no=c(()=>e("em",{class:"iconfont"},"",-1)),so=[no],ao=c(()=>e("b",null,null,-1)),io={class:"lang"},co=c(()=>e("b",null,null,-1)),lo=c(()=>e("em",{class:"iconfont"},"",-1)),ro=[lo],Ao={class:"line-spacing"},uo=c(()=>e("i",null,"行距",-1)),go={class:"resize"},po=c(()=>e("em",{class:"iconfont"},"",-1)),ho=[po],fo=c(()=>e("b",null,null,-1)),mo={class:"lang"},vo=c(()=>e("b",null,null,-1)),yo=c(()=>e("em",{class:"iconfont"},"",-1)),Co=[yo],Io={class:"paragraph-spacing"},bo=c(()=>e("i",null,"段距",-1)),ko={class:"resize"},Bo={class:"resize"},So=c(()=>e("em",{class:"iconfont"},"",-1)),wo=[So],_o=c(()=>e("b",null,null,-1)),Eo={class:"lang"},Do=c(()=>e("b",null,null,-1)),xo=c(()=>e("em",{class:"iconfont"},"",-1)),Uo=[xo],Qo={key:0,class:"read-width"},Vo=c(()=>e("i",null,"页面宽度",-1)),Ro={class:"resize"},Mo=c(()=>e("em",{class:"iconfont"},"",-1)),Po=[Mo],Lo=c(()=>e("b",null,null,-1)),Fo={class:"lang"},Ko=c(()=>e("b",null,null,-1)),zo=c(()=>e("em",{class:"iconfont"},"",-1)),Oo=[zo],No={class:"paragraph-spacing"},Ho=c(()=>e("i",null,"翻页速度",-1)),Wo={class:"resize"},Jo={class:"resize"},To=c(()=>e("em",{class:"iconfont"},"",-1)),qo=[To],Go=c(()=>e("b",null,null,-1)),Zo={class:"lang"},Yo=c(()=>e("b",null,null,-1)),jo=c(()=>e("em",{class:"iconfont"},"",-1)),Xo=[jo],$o={class:"infinite-loading"},en=c(()=>e("i",null,"无限加载",-1)),tn={__name:"ReadSettings",setup(a){const s=Ee(),d=w(0),u=w(s.config.theme==6),n=w(""),x=Je([{background:"rgba(250, 245, 235, 0.8)"},{background:"rgba(245, 234, 204, 0.8)"},{background:"rgba(230, 242, 230, 0.8)"},{background:"rgba(228, 241, 245, 0.8)"},{background:"rgba(245, 228, 228, 0.8)"},{background:"rgba(224, 224, 224, 0.8)"},{background:"rgba(0, 0, 0, 0.5)"}]),m=w({display:"inline",color:"rgba(255,255,255,0.2)"}),_=w(["雅黑","宋体","楷书"]),h=w(s.config.customFontName),C=w(!1);Se(()=>{var D=s.config;d.value=D.theme,d.value==6?n.value="":n.value=""});const i=r(()=>s.config),I=r(()=>({background:ee.themes[i.value.theme].popup})),A=r(()=>s.config.theme),b=r(()=>s.config.font),l=D=>{D==6?(u.value=!0,n.value="",m.value.color="#ed4259"):(u.value=!1,n.value="",m.value.color="rgba(255,255,255,0.2)"),i.value.theme=D,E(i.value)},k=D=>{i.value.font=D,E(i.value)},L=()=>{i.value.font=-1,i.value.customFontName=h.value,E(i.value)},M=r(()=>s.config.fontSize),oe=()=>{i.value.fontSize<48&&(i.value.fontSize+=2),E(i.value)},v=()=>{i.value.fontSize>12&&(i.value.fontSize-=2),E(i.value)},B=r(()=>s.config.spacing),Y=()=>{s.config.spacing.letter-=.01,E(i.value)},fe=()=>{s.config.spacing.letter+=.01,E(i.value)},re=()=>{s.config.spacing.line-=.1,E(i.value)},me=()=>{s.config.spacing.line+=.1,E(i.value)},ve=()=>{s.config.spacing.paragraph-=.1,E(i.value)},j=()=>{s.config.spacing.paragraph+=.1,E(i.value)},ye=r(()=>s.config.readWidth),Ce=()=>{i.value.readWidth+160+2*68>window.innerWidth||(i.value.readWidth+=160,E(i.value))},Ae=()=>{i.value.readWidth>640&&(i.value.readWidth-=160),E(i.value)},ne=r(()=>s.config.jumpDuration),de=()=>{s.config.jumpDuration+=100,E(i.value)},se=()=>{s.config.jumpDuration!==0&&(s.config.jumpDuration-=100,E(i.value))},ae=r(()=>s.config.infiniteLoading),ue=D=>{i.value.infiniteLoading=D,E(i.value)},E=D=>{s.setConfig(D),localStorage.setItem("config",JSON.stringify(D)),Ie(D)},Ie=D=>{pe.saveReadConfig(D)};return(D,S)=>{const N=Ge,q=Ze,be=Ke;return p(),f("div",{class:V(["settings-wrapper",{night:o(u),day:!o(u)}]),style:G(o(I))},[Et,e("div",Dt,[e("ul",null,[e("li",xt,[Ut,(p(!0),f(te,null,ce(o(x),(Q,F)=>(p(),f("span",{class:V(["theme-item",{selected:o(A)==F}]),key:F,style:G(Q),ref_for:!0,ref:"themes",onClick:ke=>l(F)},[F<6?(p(),f("em",Vt,"")):(p(),f("em",Rt,O(o(n)),1))],14,Qt))),128))]),e("li",Mt,[Pt,(p(!0),f(te,null,ce(o(_),(Q,F)=>(p(),f("span",{class:V(["font-item",{selected:o(b)==F}]),key:F,onClick:ke=>k(F)},O(Q),11,Lt))),128))]),e("li",Ft,[Kt,T(N,{effect:"dark",content:"自定义的字体名称",placement:"top"},{default:J(()=>[Te(e("input",{type:"text",class:"font-item font-item-input","onUpdate:modelValue":S[0]||(S[0]=Q=>he(h)?h.value=Q:null),placeholder:"请输入自定义的字体名称"},null,512),[[qe,o(h)]])]),_:1}),T(be,{placement:"top",width:"180",trigger:"click",visible:o(C),"onUpdate:visible":S[3]||(S[3]=Q=>he(C)?C.value=Q:null)},{reference:J(()=>[Ht]),default:J(()=>[zt,Ot,e("div",Nt,[T(q,{size:"small",plain:"",onClick:S[1]||(S[1]=Q=>C.value=!1)},{default:J(()=>[Z("取消")]),_:1}),T(q,{type:"primary",size:"small",onClick:S[2]||(S[2]=Q=>{L(),C.value=!1})},{default:J(()=>[Z("确定")]),_:1})])]),_:1},8,["visible"])]),e("li",Wt,[Jt,e("div",Tt,[e("span",{class:"less",onClick:v},Gt),Zt,Z(),e("span",Yt,O(o(M)),1),jt,e("span",{class:"more",onClick:oe},$t)])]),e("li",eo,[to,e("div",oo,[e("span",{class:"less",onClick:Y},so),ao,Z(),e("span",io,O(o(B).letter.toFixed(2)),1),co,e("span",{class:"more",onClick:fe},ro)])]),e("li",Ao,[uo,e("div",go,[e("span",{class:"less",onClick:re},ho),fo,Z(),e("span",mo,O(o(B).line.toFixed(1)),1),vo,e("span",{class:"more",onClick:me},Co)])]),e("li",Io,[bo,e("div",ko,[e("div",Bo,[e("span",{class:"less",onClick:ve},wo),_o,e("span",Eo,O(o(B).paragraph.toFixed(1)),1),Do,e("span",{class:"more",onClick:j},Uo)])])]),o(s).miniInterface?ge("",!0):(p(),f("li",Qo,[Vo,e("div",Ro,[e("span",{class:"less",onClick:Ae},Po),Lo,Z(),e("span",Fo,O(o(ye)),1),Ko,e("span",{class:"more",onClick:Ce},Oo)])])),e("li",No,[Ho,e("div",Wo,[e("div",Jo,[e("span",{class:"less",onClick:se},qo),Go,Z(),e("span",Zo,O(o(ne)),1),Yo,e("span",{class:"more",onClick:de},Xo)])])]),e("li",$o,[en,(p(),f("span",{class:V(["infinite-loading-item",{selected:o(ae)==!1}]),key:0,onClick:S[4]||(S[4]=Q=>ue(!1))},"关闭",2)),(p(),f("span",{class:V(["infinite-loading-item",{selected:o(ae)==!0}]),key:1,onClick:S[5]||(S[5]=Q=>ue(!0))},"开启",2))])])])],6)}}},on=le(tn,[["__scopeId","data-v-ed0bb531"]]);const nn={class:"wrapper"},sn=["onClick"],an={__name:"CatalogItem",props:["index","source","gotoChapter","currentChapterIndex"],setup(a){const s=a,d=n=>n==s.currentChapterIndex,u=r(()=>{var n;return((n=s.source)==null?void 0:n.catas)??[s.source]});return(n,x)=>(p(),f("div",nn,[(p(!0),f(te,null,ce(o(u),m=>(p(),f("div",{class:V(["cata-text",{selected:d(m.index)}]),key:m.url,onClick:_=>a.gotoChapter(m)},O(m.title),11,sn))),128))]))}},cn=le(an,[["__scopeId","data-v-51153469"]]);const ln=a=>(we("data-v-d3f97576"),a=a(),_e(),a),rn=ln(()=>e("div",{class:"title"},"目录",-1)),An={__name:"PopCatalog",emits:["getContent"],setup(a,{emit:s}){const d=Ee(),u=r(()=>_.value==6),{catalog:n,popCataVisible:x,miniInterface:m}=ze(d),_=r(()=>d.config.theme),h=r(()=>({background:ee.themes[_.value].popup})),C=r({get:()=>d.readingBook.index,set:l=>d.readingBook.index=l}),i=r(()=>{let l=n.value;if(m.value)return l;let k=Math.ceil(l.length/2),L=new Array(k),M=0;for(;M<k;)L[M]={index:M,catas:l.slice(2*M,2*M+2)},M++;return L}),I=l=>{const k=n.value.indexOf(l);C.value=k,d.setPopCataVisible(!1),d.setContentLoading(!0),s("getContent",k)},A=w(),b=r(()=>{let l=C.value;return m.value?l:Math.floor(l/2)});return Ye(()=>{x.value&&A.value.scrollToIndex(b.value)}),(l,k)=>(p(),f("div",{class:V({"cata-wrapper":!0,visible:o(x)}),style:G(o(h))},[rn,T(o(je),{style:{height:"300px",overflow:"auto"},class:V({night:o(u),day:!o(u)}),ref_key:"virtualListRef",ref:A,"data-key":"index","wrap-class":"data-wrapper","item-class":"cata","data-sources":o(i),"data-component":cn,"estimate-size":40,"extra-props":{gotoChapter:I,currentChapterIndex:o(C)}},null,8,["class","data-sources","extra-props"])],6))}},dn=le(An,[["__scopeId","data-v-d3f97576"]]);const R=a=>(we("data-v-9bee0032"),a=a(),_e(),a),un={class:"tools"},gn=R(()=>e("div",{class:"iconfont"},"",-1)),pn=R(()=>e("div",{class:"icon-text"},"目录",-1)),hn=[gn,pn],fn=R(()=>e("div",{class:"iconfont"},"",-1)),mn=R(()=>e("div",{class:"icon-text"},"设置",-1)),vn=[fn,mn],yn=R(()=>e("div",{class:"iconfont"},"",-1)),Cn=R(()=>e("div",{class:"icon-text"},"书架",-1)),In=[yn,Cn],bn=R(()=>e("div",{class:"iconfont"},"",-1)),kn=R(()=>e("div",{class:"icon-text"},"顶部",-1)),Bn=[bn,kn],Sn=R(()=>e("div",{class:"iconfont"},"",-1)),wn=R(()=>e("div",{class:"icon-text"},"底部",-1)),_n=[Sn,wn],En={class:"tools"},Dn=R(()=>e("div",{class:"iconfont"},"",-1)),xn={key:0},Un={key:0},Qn=R(()=>e("div",{class:"iconfont"},"",-1)),Vn=R(()=>e("div",{class:"chapter-bar"},null,-1)),Rn={class:"content"},Mn=["chapterIndex"],Pn={__name:"BookChapter",setup(a){const s=w(),{isLoading:d,loadingWrapper:u}=ot(s,"正在获取信息"),n=Ee();try{const t=JSON.parse(localStorage.getItem("config"));t!=null&&n.setConfig(t)}catch{localStorage.removeItem("config")}const{catalog:x,popCataVisible:m,readSettingsVisible:_,miniInterface:h,showContent:C,config:i,readingBook:I,bookProgress:A}=ze(n),b=r({get:()=>I.value.chapterPos,set:t=>I.value.chapterPos=t}),l=r({get:()=>I.value.index,set:t=>I.value.index=t}),k=r(()=>i.value.theme),L=r(()=>i.value.infiniteLoading),M=r(()=>n.config.font>=0?ee.fonts[n.config.font]:n.config.customFontName),oe=r(()=>n.config.fontSize+"px"),v=r(()=>ee.themes[k.value].body),B=r(()=>ee.themes[k.value].content),Y=r(()=>ee.themes[k.value].popup),fe=r(()=>h.value?window.innerWidth+"px":n.config.readWidth-130+"px"),re=r(()=>h.value?window.innerWidth-33:n.config.readWidth-33),me=r(()=>({background:v.value})),ve=r(()=>({background:B.value,width:fe.value})),j=w(!1),ye=r(()=>({background:Y.value,marginLeft:h.value?0:-(n.config.readWidth/2+68)+"px",display:h.value&&!j.value?"none":"block"})),Ce=r(()=>({background:Y.value,marginRight:h.value?0:-(n.config.readWidth/2+52)+"px",display:h.value&&!j.value?"none":"block"})),Ae=r(()=>k.value==6),ne=()=>{n.setMiniInterface(window.innerWidth<776);const t=n.config.readWidth;de(t)},de=t=>{n.miniInterface||t+2*68>window.innerWidth&&(n.config.readWidth-=160)};Xe(()=>n.config.readWidth,t=>de(t));const se=w(),ae=w(),ue=()=>{$(se.value)},E=()=>{$(ae.value)},Ie=$e(),D=()=>{Ie.push("/")},S=w([]),N=w(!0),q=(t,y=!0,H=0)=>{y&&(n.setShowContent(!1),$(se.value,{duration:0}),De(t,H),S.value=[]);let U=sessionStorage.getItem("bookUrl"),{title:W,index:K}=x.value[t];u(pe.getBookContent(U,K).then(g=>{if(g.data.isSuccess){let He=g.data.data.split(/\n+/);S.value.push({index:t,content:He,title:W}),y&&F(H)}else{z({message:g.data.errorMsg,type:"error"});let X=[g.data.errorMsg];S.value.push({index:t,content:X,title:W})}if(n.setContentLoading(!0),N.value=!1,n.setShowContent(!0),!g.data.isSuccess)throw g.data},g=>{z({message:"获取章节内容失败",type:"error"});let X=["获取章节内容失败！"];throw S.value.push({index:t,content:X,title:W}),n.setShowContent(!0),g}))},be=w(),Q=w(),F=t=>{Fe(()=>{Q.value.length===1&&Q.value[0].scrollToReadedLength(t)})},ke=(t,y)=>{De(t,y)};Me(()=>{var t;document.title=((t=x.value[l.value])==null?void 0:t.title)||document.title});const De=(t,y)=>{let H=sessionStorage.getItem("bookUrl");var U=JSON.parse(localStorage.getItem(H));U.index=t,U.chapterPos=y,localStorage.setItem(H,JSON.stringify(U)),U=JSON.parse(localStorage.getItem("readingRecent")),U.chapterIndex=t,U.chapterPos=y,localStorage.setItem("readingRecent",JSON.stringify(U)),l.value=t,b.value=y,sessionStorage.setItem("chapterIndex",t),sessionStorage.setItem("chapterPos",String(y))},xe=()=>{document.visibilityState=="hidden"&&pe.saveBookProgressWithBeacon(A.value)},Ue=()=>{n.setContentLoading(!0);let t=l.value+1;typeof x.value[t]<"u"?(z({message:"下一章",type:"info"}),q(t)):z({message:"本章是最后一章",type:"error"})},Qe=()=>{n.setContentLoading(!0);let t=l.value-1;typeof x.value[t]<"u"?(z({message:"上一章",type:"info"}),q(t)):z({message:"本章是第一章",type:"error"})};let P;const Be=w();Me(()=>{L.value?P==null||P.observe(Be.value):P==null||P.disconnect()});const Oe=()=>{let t=S.value.slice(-1)[0].index;x.value.length-1>t&&q(t+1,!1)},Ne=t=>{if(!d.value)for(let{isIntersecting:y}of t){if(!y)return;Oe()}};let ie=!0;const Ve=t=>{if(ie)switch(t.key){case"ArrowLeft":t.stopPropagation(),t.preventDefault(),Qe();break;case"ArrowRight":t.stopPropagation(),t.preventDefault(),Ue();break;case"ArrowUp":t.stopPropagation(),t.preventDefault(),document.documentElement.scrollTop===0?z({message:"已到达页面顶部",type:"warn"}):(ie=!1,$(0-document.documentElement.clientHeight+100,{duration:n.config.jumpDuration,callback:()=>ie=!0}));break;case"ArrowDown":t.stopPropagation(),t.preventDefault(),document.documentElement.clientHeight+document.documentElement.scrollTop===document.documentElement.scrollHeight?z({message:"已到达页面底部",type:"warn"}):(ie=!1,$(document.documentElement.clientHeight-100,{duration:n.config.jumpDuration,callback:()=>ie=!0}));break}},Re=t=>{(t.key==="ArrowUp"||t.key==="ArrowDown")&&(t.preventDefault(),t.stopPropagation())};return Se(()=>{let t=sessionStorage.getItem("bookUrl"),y=sessionStorage.getItem("bookName"),H=sessionStorage.getItem("bookAuthor"),U=Number(sessionStorage.getItem("chapterIndex")||0),W=Number(sessionStorage.getItem("chapterPos")||0);var K=JSON.parse(localStorage.getItem(t));(K==null||U!=K.index||W!=K.chapterPos)&&(K={bookName:y,bookAuthor:H,bookUrl:t,index:U,chapterPos:W},localStorage.setItem(t,JSON.stringify(K))),ne(),window.addEventListener("resize",ne),u(pe.getChapterList(t).then(g=>{if(!g.data.isSuccess){z({message:g.data.errorMsg,type:"error"}),setTimeout(D,500);return}let X=g.data.data;n.setCatalog(X),n.setReadingBook(K),q(U,!0,W),window.addEventListener("keyup",Ve),window.addEventListener("keydown",Re),document.addEventListener("visibilitychange",xe),P=new IntersectionObserver(Ne,{rootMargin:"-100% 0% 20% 0%"}),L.value&&P.observe(Be.value),document.title=null,document.title=y+" | "+x.value[U].title},g=>{throw z({message:"获取书籍目录失败",type:"error"}),g}))}),Le(()=>{window.removeEventListener("keyup",Ve),window.removeEventListener("keydown",Re),window.removeEventListener("resize",ne),document.removeEventListener("visibilitychange",xe),_.value=!1,m.value=!1,P==null||P.disconnect()}),(t,y)=>{const H=dn,U=Ke,W=on,K=rt;return p(),f("div",{class:V(["chapter-wrapper",{night:o(Ae),day:!o(Ae)}]),style:G(o(me)),onClick:y[2]||(y[2]=g=>j.value=!o(j))},[e("div",{class:"tool-bar",style:G(o(ye))},[e("div",un,[T(U,{placement:"right",width:o(re),trigger:"click","show-arrow":!1,visible:o(m),"onUpdate:visible":y[0]||(y[0]=g=>he(m)?m.value=g:null),"popper-class":"pop-cata"},{reference:J(()=>[e("div",{class:V(["tool-icon",{"no-point":o(N)}])},hn,2)]),default:J(()=>[T(H,{onGetContent:q,class:"popup"})]),_:1},8,["width","visible"]),T(U,{placement:"right",width:o(re),trigger:"click","show-arrow":!1,visible:o(_),"onUpdate:visible":y[1]||(y[1]=g=>he(_)?_.value=g:null),"popper-class":"pop-setting"},{reference:J(()=>[e("div",{class:V(["tool-icon",{"no-point":o(N)}])},vn,2)]),default:J(()=>[T(W,{class:"popup"})]),_:1},8,["width","visible"]),e("div",{class:"tool-icon",onClick:D},In),e("div",{class:V(["tool-icon",{"no-point":o(N)}]),onClick:ue},Bn,2),e("div",{class:V(["tool-icon",{"no-point":o(N)}]),onClick:E},_n,2)])],4),e("div",{class:"read-bar",style:G(o(Ce))},[e("div",En,[e("div",{class:V(["tool-icon",{"no-point":o(N)}]),onClick:Qe},[Dn,o(h)?(p(),f("span",xn,"上一章")):ge("",!0)],2),e("div",{class:V(["tool-icon",{"no-point":o(N)}]),onClick:Ue},[o(h)?(p(),f("span",Un,"下一章")):ge("",!0),Qn],2)])],4),Vn,e("div",{class:"chapter",ref_key:"content",ref:s,style:G(o(ve))},[e("div",Rn,[e("div",{class:"top-bar",ref_key:"top",ref:se},null,512),(p(!0),f(te,null,ce(o(S),g=>(p(),f("div",{key:g.index,chapterIndex:g.index,ref_for:!0,ref_key:"chapter",ref:be},[o(C)?(p(),et(K,{key:0,ref_for:!0,ref_key:"chapterRef",ref:Q,chapterIndex:g.index,contents:g.content,title:g.title,spacing:o(n).config.spacing,fontSize:o(oe),fontFamily:o(M),onReadedLengthChange:ke},null,8,["chapterIndex","contents","title","spacing","fontSize","fontFamily"])):ge("",!0)],8,Mn))),128)),e("div",{class:"loading",ref_key:"loading",ref:Be},null,512),e("div",{class:"bottom-bar",ref_key:"bottom",ref:ae},null,512)])],4)],6)}}},zn=le(Pn,[["__scopeId","data-v-9bee0032"]]);export{zn as default};