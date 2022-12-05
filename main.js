import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: fromLonLat ([92.852572, 56.010569]),
    zoom: 12
  })
});

$('menu-btn').on('click',function() {
  e.preventDefault();
   $('.menu').toggleClass('menu_active');
   $('content'),toggleClass('content_active')
 })