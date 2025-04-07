//credits to Reindustrialization for me figuring this out


  // Part: Import
    const wea_ambientWeather = require(" b /wea/wea_ambientWeather");
  // End

  // Part: wea-amb
    const lv_back= extend(Weather, "lv_back", {
      update(state) {
        this.super$update(state);
        wea_ambientWeather.update(this, state);
      },
    });
    const we_lv-back = new Weather.WeatherEntry(lv-back);
    we_lv_back.always = true;
    exports.lv_back = weaAmb_dunesNormal;
    exports.we_lv_back = we_lv_backNormal;


    const wealv-back = extend(Weather, "lv_back", {
      update(state) {
        this.super$update(state);
        wea_ambientWeather.update(this, state);
      },
    });
    const we_lv_back = new Weather.WeatherEntry(wealv_back);
    we_lv_back.always = true;
    exports.wealv_back = wealv_back;
    exports.we_lv_backn = lv_back;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info(" b :ct_wea_ambientWeather.js loaded.");
});
