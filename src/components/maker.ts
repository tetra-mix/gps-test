import L, {IconOptions} from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

//defaultMarker
L.Icon.Default.prototype.options = L.Icon.Default.prototype.options || {};
L.Icon.Default.mergeOptions({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

// カラーマーカーの作成
export const colorMarker = (color: string): L.Icon<IconOptions> => {
  return L.icon({
    iconUrl: icon.src,
    shadowUrl: iconShadow.src,
    className: `default-marker ${color}`,
  });
};