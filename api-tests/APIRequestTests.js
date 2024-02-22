import axios from "axios";
import { expect } from "chai";
import { faker } from "@faker-js/faker";
const baseURI = "https://reqres.in";
const usersPath = "api/users"

describe('CRUD API Request Tests', async () => {
    it('T001 - Should be able to get users list.', async () => {
        const res = await axios.get(`${baseURI}/${usersPath}?page=2`);
        // console.log(res.data)
        expect(res.data.page).equal(2);
        expect(res.data.per_page).equal(6);
        expect(res.data.total).equal(12);
    });

    it("T002 - should be able post a user", async () => {
        const randomName = faker.person.firstName();
        const randomJobTitle = faker.person.jobTitle();
        const res = await axios.post(`${baseURI}/${usersPath}/users`,
            {
                "name": randomName,
                "job": randomJobTitle
            }
        ).then(res => res.data)
        // console.log(res);
        expect(res.name).equal(randomName);
        expect(res.job).equal(randomJobTitle);
    })

    it("T003 - should be able update name of the user", async () => {
        const randomName = faker.person.firstName();
        const res = await axios.patch(`${baseURI}/${usersPath}/2`,
            {
                "name": randomName
            }
        ).then(res => res.data)
        // console.log(res);
        expect(res.name).equal(randomName);
    })

    it("T004 - should be able update a user", async () => {
        const randomName = faker.person.firstName();
        const randomJobTitle = faker.person.jobTitle();
        const res = await axios.put(`${baseURI}/${usersPath}/2`,
            {
                "name": randomName,
                "job": randomJobTitle
            }
        ).then(res => res.data)
        // console.log(res);
        expect(res.name).equal(randomName);
        expect(res.job).equal(randomJobTitle);
    })

    it("T005 - should be able delete user with id 2", async () => {
        const res = await axios.delete(`${baseURI}/${usersPath}/2')`);
        // console.log(res);
        expect(res.status).equal(204);
    })
});