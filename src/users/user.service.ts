import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private PATH = '/graphql';
  private HOST = 'http://localhost:3000';
  private fullUrl = this.HOST + this.PATH;

  constructor(private apollo: Apollo) {}

  getUsers(): Observable<UserDto[]> {
    return this.apollo
      .watchQuery({
        query: gql`
          query {
            allUsers {
              id
              name
              email
            }
          }
        `,
        context: {
          uri: this.fullUrl,
        },
      })
      .valueChanges.pipe(map((result: any) => result.data.allUsers));
  }

  createUser(user: CreateUser): Observable<UserDto> {
    return this.apollo
      .mutate({
        mutation: gql`
          mutation ($name: String!, $email: String!) {
            createUser(name: $name, email: $email) {
              id
              name
              email
            }
          }
        `,
        context: {
          uri: this.fullUrl,
        },
        variables: {
          name: user.name,
          email: user.email,
        },
      })
      .pipe(map((result: any) => result.data.createUser));
  }

  updateUser(user: UpdateUser): Observable<UserDto> {
    return this.apollo
      .mutate({
        mutation: gql`
          mutation ($id: ID!, $name: String!, $email: String!) {
            updateUser(id: $id, name: $name, email: $email) {
              id
              name
              email
            }
          }
        `,
        context: {
          uri: this.fullUrl,
        },
        variables: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      })
      .pipe(map((result: any) => result.data.updateUser));
  }

  getUser(id: string): Observable<UserDto> {
    return this.apollo
      .watchQuery({
        query: gql`
          {
            User(id: ${id}) {
              id
              name
              email
            }
          }
        `,
        context: {
          uri: this.fullUrl,
        },
      })
      .valueChanges.pipe(map((result: any) => result.data.User));
  }

  deleteUser(id: string): Observable<UserDto> {
    return this.apollo
      .mutate({
        mutation: gql`
          mutation ($id: ID!) {
            deleteUser(id: $id) {
              id
              name
            }
          }
        `,
        context: {
          uri: this.fullUrl,
        },
        variables: {
          id: id,
        },
      })
      .pipe(map((result: any) => result.data.deleteUser));
  }

  filterUser(email?: string): Observable<UserDto[]> {
    return this.apollo
      .watchQuery({
        query: gql`
          query ($email: String!) {
            allUsers(filter: { email: $email }) {
              id
              name
              email
            }
          }
        `,
        context: {
          uri: this.fullUrl,
        },
        variables: {
          email: email,
        },
      })
      .valueChanges.pipe(map((result: any) => result.data.allUsers));
  }
}

export interface UserDto {
  id?: number;
  name?: string;
  email?: string;
}

export type CreateUser = Omit<UserDto, 'id'>;
export type UpdateUser = UserDto;
