// @actions
import { context, getOctokit } from "@actions/github";
import { getInput } from "@actions/core";

// libs
import dedent from 'dedent';

const log = console.log;

type GithubContext = typeof context;

function greet(name: string, repoUrl: string) {
  log(`👻 Hello ${name}! You are running a GitHub Action in \n${repoUrl}`);
}

// function 参数解构 ✅
// function getRepoUrl({ repo, serverUrl }: GithubContext): string {
//   log(`repo, serverUrl =`, repo, serverUrl);
//   return `${serverUrl}/${repo.owner}/${repo.repo}`;
// }

function getRepoUrl(context: GithubContext): string {
  const { repo, serverUrl } = context;
  log(`context =`, context);
  log(`repo, serverUrl =`, repo, serverUrl);
  return `${serverUrl}/${repo.owner}/${repo.repo}`;
}


const inputName = getInput("name");

greet(inputName, getRepoUrl(context));


interface Human {
  name: string;
  age: number;
  // gender?: 'male' | 'female' | 'unknown gender';
}

class Person implements Human {
  public gender: string = '';
  constructor(public name: string, public age: number,  gender?: string) {
    if(gender) {
      this.gender = gender;
    }
  }
  // getter & setter
  get whoami () {
    return this.name;
  }
  set whoami (name: string) {
    this.name = name;
  }
  getName() {
    return this.name ?? 'unknown name';
  }
}

const person = new Person('xgqfrms', 23);

log(`whoami =`, person.whoami, person.getName());

// export {};
