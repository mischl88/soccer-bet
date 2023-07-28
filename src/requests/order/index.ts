import instance from "@/requests/axios";

export const getOrders = async () => {
  return instance.get('api')
}
