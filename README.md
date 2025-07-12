# VK Movie App

VK Movie App — приложение для поиска и фильтрации фильмов с использованием VKUI и API Кинопоиска.

## 🚀 Стек технологий

- **React** + **TypeScript**
- **MobX** (стейт-менеджмент)
- **React Router v7** (роутинг)
- **Axios** (работа с API)
- **VKUI** (UI-компоненты)
- **Vite** (сборка)
- **pnpm** (пакетный менеджер)

## 📁 Структура проекта

- `app` — инициализация приложения, роутинг, глобальные стили
- `entities` — бизнес-сущности (например, movie), их модели и UI
- `features` — фичи, объединяющие бизнес-логику и UI (фильтры, избранное, поиск)
- `pages` — страницы приложения (home, details, favorites, error)
- `shared` — переиспользуемые модули: api, хуки, UI, контексты
- `widgets` — крупные UI-компоненты (Layout, Navbar, Footer)

## ⚙️ Установка и запуск

```bash
pnpm install      # Установка зависимостей
pnpm run dev      # Запуск в режиме разработки
```

## 🛠️ Основные команды

pnpm dev — запуск dev
pnpm format — автоформатирование кода (Prettier)

pnpm build — сборка production
pnpm preview — предпросмотр production-сборки
pnpm lint — запуск линтера

## 🏗️ Best practices

- Соблюдайте структуру: бизнес-логика — в `entities`, фичи — в `features`, переиспользуемое — в `shared`
- Для состояния используйте MobX stores и контексты
- UI-компоненты должны быть максимально простыми, без бизнес-логики
- Для работы с API используйте модули из `shared/api`
- Новые страницы добавляйте в `src/pages` и регистрируйте в роутере (`src/app/routing/router.tsx`)
- Стили — только через VKUI и глобальные стили в `src/app/styles/globals.css`
- Не храните логику в компонентах страниц — выносите в store/контексты

## 🚦 Точки входа и навигация

- Главная точка входа: `src/app/entrypoint/main.tsx`
- Роутинг: `src/app/routing/router.tsx`
- Провайдеры MobX: `src/shared/model/movieContext.tsx`, `src/features/favorites/model/favoritesContext.tsx`, `src/features/filters/model/filtersContext.tsx`
- Основной layout: `src/widgets/Layout/index.tsx`

## 📝 Как вносить изменения

1. Для новой бизнес-логики — создайте store в `entities/<entity>/model`.
2. Для новой фичи — создайте директорию в `features`.
3. Для новых страниц — добавьте компонент в `pages` и зарегистрируйте в роутере.
4. Для новых API-запросов — добавьте endpoint в `shared/api/endpoints`.
5. Соблюдайте форматирование (Prettier, ESLint).

---

> Проект следует принципам feature-sliced design и разделяет бизнес-логику, UI и инфраструктуру.
