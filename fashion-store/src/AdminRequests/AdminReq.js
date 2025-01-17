import { ref } from 'vue'
const isLoading = ref(true)
const isError = ref(null)

const useAdminRequest = async (URL = '', postOptions = null, errorMSG = null) => {
  isLoading.value = true
  isError.value = null
  try {
    const response = await fetch(URL, postOptions)
    if (!response.ok) throw Error('Error something went wrong reload')
    return response
  } catch (error) {
    isError.value = error.message
  } finally {
    isLoading.value = false
  }
}

export default { useAdminRequest }
