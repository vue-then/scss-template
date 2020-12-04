<template>
    <div>
        <article class=" contact-style ">
        
            <section class=" contact-cent ">
                
                <div class=" cantact-map ">
                    <div id="map"></div>
                    <div id="infowindow-content">
                        <span id="place-name" class="title"></span><br />
                        <strong>Place ID:</strong> <span id="place-id"></span><br />
                        <span id="place-address"></span>
                    </div>
                    <div class=" cantact-map-info ">
                        <div class=" map-info-item ">
                            <h5>地址</h5>
                            <p>
                                <svg class=" bi bi-geo-alt " width=" 1em " height=" 1em " viewBox=" 0 0 16 16 " fill="
                                currentColor "
                                    xmlns=" http://www.w3.org/2000/svg ">
                                    <path fill-rule=" evenodd "
                                        d=" M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 100-6 3 3 0 000 6z "
                                        clip-rule=" evenodd "></path>
                                </svg>
                                <span>SO1，567楼，Al Khabaisi，塞德港，德拉，阿联酋</span>
                            </p>
                        </div>
                        <div class=" map-info-item ">
                            <h5>联系方式</h5>
                            <p>
                                <svg class=" bi bi-geo-alt " width=" 1em " height=" 1em " viewBox=" 0 0 16 16 " fill="
                                currentColor "
                                    xmlns=" http://www.w3.org/2000/svg ">
                                    <path fill-rule=" evenodd "
                                        d=" M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 100-6 3 3 0 000 6z "
                                        clip-rule=" evenodd "></path>
                                </svg>
                                <span>S+971 52 157 2189</span>
                            </p>
                            <p>
                                <svg class=" bi bi-geo-alt " width=" 1em " height=" 1em " viewBox=" 0 0 16 16 " fill="
                                currentColor "
                                    xmlns=" http://www.w3.org/2000/svg ">
                                    <path fill-rule=" evenodd "
                                        d=" M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 100-6 3 3 0 000 6z "
                                        clip-rule=" evenodd "></path>
                                </svg>
                                <span>+971 4 252 2294</span>
                            </p>
                            <p>
                                <svg class=" bi bi-geo-alt " width=" 1em " height=" 1em " viewBox=" 0 0 16 16 " fill="
                                currentColor "
                                    xmlns=" http://www.w3.org/2000/svg ">
                                    <path fill-rule=" evenodd "
                                        d=" M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 100-6 3 3 0 000 6z "
                                        clip-rule=" evenodd "></path>
                                </svg>
                                <span>nfo@quickrealestate.ae</span>
                            </p>
                        </div>
                        <div class=" map-info-item ">
                            <h5>工作时间</h5>
                            <p>
                                <span>周日至周四：上午8点至下午6点</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    </div>
</template>

<script>
import axios from '@/utils/axios';
export default {
    mounted() {
        this.initAutocomplete();
    },
    methods: {
        //「咖啡馆」 "cafe",
        // ”酒吧” "bar",
        //「餐厅」 "restaurant",
        //「食物」 "food",
        //“利息点” "point_of_interest",
        //「商店」 "store",
        //「机构」 "establishment";
        initAutocomplete() {
            var location_r = { lat: 25.0668539, lng: 55.2148866 };
            var latLng = new google.maps.LatLng(location_r.lat, location_r.lng);
            var gEvent = google.maps.event;
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 11,
                center: latLng,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            });
            var marker = new google.maps.Marker({
                position: latLng,
                title: "Point A",
                // icon: "./html/bb.png",
                map: map,
                // draggable: true,
            });
            // var url =
            //     "/gmap";
            function getLocation(){
                axios.get().then(function(res){
                    console.log('获取数据：',res)
                })
            }
            getLocation()


            
            // 展示详情
            const infowindow = new google.maps.InfoWindow();
            const infowindowContent = document.getElementById("infowindow-content");
            infowindow.setContent(infowindowContent);
            // const marker = new google.maps.Marker({ map: map });
            marker.addListener("click", () => {
                infowindow.open(map, marker);
            });
            
        }
        //
        // google.maps.event.addDomListener(window, "load", initAutocomplete);

    },
}
</script>
