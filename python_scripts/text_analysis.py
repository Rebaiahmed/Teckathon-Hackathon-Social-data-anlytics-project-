import http.client, urllib.request, urllib.parse, urllib.error, base64

headers = {
    # Request headers
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': '881e4bc7e38a47b3b916ceed75597dcf',
}

params = urllib.parse.urlencode({
    # Request parameters
    'numberOfLanguagesToDetect': '2',
})
 
try:
    conn = http.client.HTTPSConnection('northeurope.api.cognitive.microsoft.com')
    conn.request("POST", "/text/analytics/v2.0/languages?%s" % params, "لمزيد من المعلومات كلموا خدمة الحريف", headers)
    response = conn.getresponse()
    data = response.read()
    print(data)
    conn.close()
except Exception as e:
    print("[Errno {0}] {1}".format(e.errno, e.strerror))

####################################