import { Footer as VKFooter } from '@vkontakte/vkui'

export function Footer() {
  return <VKFooter>© {new Date().getFullYear()} Все права защищены</VKFooter>
}
