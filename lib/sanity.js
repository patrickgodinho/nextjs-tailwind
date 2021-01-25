const sanityClient = require('@sanity/client')

module.exports = sanityClient({
    projectId: 'kjjnqcou', // you can find this in sanity.json
    dataset: 'production', // or the name you chose in step 1
    useCdn: false, // `false` if you want to ensure fresh data
    token: 'sk0wigOd4r3Q18dZoqu82Sitd26Xex5gN8gz5bejkiyXKwEQD9leCyDJER3q6ppUg0VD9OCKYqcIwQgFLMb9TGLvBrC43S8LlUPVSbHeLjttATnm1sj5FMs5x7fyNTWeLDtRI8613bOwanDyoeMu4mzUlsGvmQCFHK1t80t9TpBTspXIg8RW'
})