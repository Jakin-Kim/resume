export type Data = {
    intro: {
      title: string,
      content: string[],
    }  
}

export type BackCardType = {
    isWorking: boolean,
    setIsWorking: (isWorking: boolean) => void,
    navigate: (path: string) => void
}