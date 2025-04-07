//credits to Reindustrialization for me understanding this bull shit


  // Part: Import
    const wea_ambientWeather = require(" b /wea/wea_ambientWeather");
  // End


  // Part: wea-amb
    const wealv_back = extend(Weather, lv-back", {
      update(state) {
        this.super$update(state);
        wea_ambientWeather.update(this, state);
      },
    });
    const we_lv_back = new Weather.WeatherEntry(lv_back);
    we_lv_back.always = true;
    exports.lv_back = lv_back;
    exports.we_lv_back = we_lv_back;

  // End




Events.run(ClientLoadEvent, () => {
  Log.info(" B :ct_wea_ambientWeather.js loaded.");
});
