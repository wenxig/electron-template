import { useMessage } from "naive-ui"
import { Inject } from "@preload/type"
declare global {
  interface Window {
    $message: ReturnType<typeof useMessage>
   
  }
}
