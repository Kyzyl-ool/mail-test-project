# mail-test-project

[![Build Status](https://travis-ci.com/Kyzyl-ool/mail-test-project.svg?branch=master)](https://travis-ci.com/Kyzyl-ool/mail-test-project)

Решение как StoryBook static развернуто здесь: http://kyzyl-ool.github.io/mail-test-project

## Компоненты
При верстке использовались самописные компоненты (см. `lib/components`). Функционал большинства компонентов сделан минимальным в рамках тестового задания.

Использование каждого из них можно посмотреть через StoryBook, выполнив команду:
```
yarn run storybook
```

Для просмотра итоговой верстки:
```
yarn run start 
```

## Стилизация компонентов
Все настройки шрифтов, цветов и размеров можно найти в папке `lib/styles`.

## Покрытие тестами
Для тестирования используется Jest и Enzyme. Запуск тестов:
```
yarn run test
```

## Поддержка качества кода
Для каждого вполне знакомого и очевидного компонента дано краткое описание. Те вещи, которые на первый взгяд могут показаться нетривиальными, я постарался подкрепить подробным описанием.
Настроен pre-commit через prettier для автоматической поддержки code style.
