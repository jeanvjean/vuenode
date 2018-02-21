import Api from '@/services/Api'

export default {
    index () {
        return Api().get('weddings',weddings)
    },
    post (wed) {
        return Api().post('wedding/create',wed)
    }
}
