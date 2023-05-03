pm.test("response must be valid and have a body", function () {
     pm.response.to.be.ok;
     pm.response.to.be.withBody;
     pm.response.to.be.json;
});

pm.test("Поле равно тратата", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.vehicles[0]).to.eql("https://swapi.py4e.com/api/vehicles/38/");
});

pm.test("Cookie JSESSIONID is present", () => {
  pm.expect(pm.cookies.has('JSESSIONID')).to.be.false;
});

pm.test("The response has all properties", () => {
    const responseJson = pm.response.json();
    pm.expect(responseJson.height).to.eql('182');
    pm.expect(responseJson.name).to.be.a('string');
    pm.expect(responseJson.mass).to.have.lengthOf(2);
});

pm.test("Статус ответа 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Время ответа меньше 200мс", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

pm.test("Body contains string",() => {
  pm.expect(pm.response.text()).to.include("landing craft");
});

pm.test("Header is present", () => {
  pm.response.to.have.header("Content-Encoding");
});

pm.test("Header is application/json", () => {
  pm.expect(pm.response.headers.get('Content-Encoding')).to.eql('br');
});