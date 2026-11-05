import { APIRequestContext } from '@playwright/test';

export class UserApiHelper {
    private request: APIRequestContext;
    private readonly baseUrl: string;

    constructor(request: APIRequestContext) {
        this.request = request;

        const baseApiUrl = process.env.BASE_API_URL || 'https://api.practicesoftwaretesting.com';
        if (!baseApiUrl) {
            throw new Error('BASE_API_URL não está definido no arquivo .env');
        }
        this.baseUrl = baseApiUrl;
    }

    async createUser(userData: {
        first_name: string;
        last_name: string;
        address: string[];
        city: string;
        state: string;
        country: string;
        postcode: string;
        phone: string;
        dob: string;
        email: string;
        password: string;
    }) {
        const response = await this.request.post(`${this.baseUrl}/users/register`, {
            data: userData,
        });

        if(!response.ok()) {
            throw new Error(`Falha ao criar usuário via API: ${await response.text()}`);
        }
        return await response.json();
    }

    async deleteUser(email: string, password: string) {
    const loginResponse = await this.request.post(`${this.baseUrl}/users/login`, {
      data: { email, password: password },
    });

    if (!loginResponse.ok()) return;

    const { access_token, user_id } = await loginResponse.json();

    await this.request.delete(`${this.baseUrl}/users/${user_id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  }


}