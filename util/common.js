import * as WebBrowser from "expo-web-browser";
import analytics from "@react-native-firebase/analytics";

export const openLink = (link) => {
  global.occupied = true
  WebBrowser.openBrowserAsync(link).then(r => {
    global.occupied = false
  })
}

export const openSourceLink = (link, logContent) => {
  openLink(link)
  analytics().logEvent('Source_click',{
    source_name: logContent.name,
    source_url: logContent.url
  })
}

export const openBrandLink = (link, brand) => {
  openLink(link)
  analytics().logEvent('Doing_good',{
    brandName: brand
  })
}
