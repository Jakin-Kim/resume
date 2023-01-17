export type IntroType = {
    intro: {
      title: string,
      content: string[],
    }
}

export type ContentsType = {
  contents: {
    skills: {
      communication: string[],
      javascript: string[],
      typescript: string[],
      react: string[],
      nodejs: string[],
      aws: string[],
    },
  }
}

export type ProjectsType = {
  title: string,
  period: string,
  description: string,
  whatidid: string[],
  stack: string[],
}

export type BackCardType = {
    isWorking: boolean,
    setIsWorking: (isWorking: boolean) => void,
    navigate: (path: string) => void
}

export type DarkModeType = {
  isDark: boolean,
}

export type NavBarProps = {
  isDark: boolean,
  isActive: boolean,
}