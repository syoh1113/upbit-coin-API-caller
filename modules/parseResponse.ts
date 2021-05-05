import request from "request";

function getRemainMinSecCountFromResponse(response : request.Response) {
    const remaining_req = String(response.headers['remaining-req'])
    var splitted = remaining_req.split(";")

    var min_count = null
    var sec_count = null
    for (let s of splitted) {
        s = s.trim()
        let index = s.indexOf('min=')
        if (index != -1) {
            min_count = s.substring(index+4)
            continue
        }
        else
        {
            index = s.indexOf('sec=')
            if (index != -1) {
                sec_count = s.substring(index+4)
            }
            continue
        }
    }

    return [min_count, sec_count]
}

export { getRemainMinSecCountFromResponse }
