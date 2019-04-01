import WeatherSagas from "./Weather";
import ApiErrors from "./ApiErrors";
import DronePositionSagas from "./DronePosition";

export default [...ApiErrors, ...WeatherSagas, ...DronePositionSagas];
