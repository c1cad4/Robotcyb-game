# Robotcyb-game

> Игровая симуляция фермы с ресурсами и проверяемыми правилами.

[![CI](https://github.com/c1cad4/Robotcyb-game/actions/workflows/ci.yml/badge.svg)](https://github.com/c1cad4/Robotcyb-game/actions/workflows/ci.yml)

[Карта экосистемы](https://github.com/c1cad4/cybOS) · [Архитектура](docs/ECOSYSTEM.md) · [Интеграция в cybOS](https://github.com/c1cad4/CybOS-demo)

## Назначение

Игровая симуляция фермы с ресурсами и проверяемыми правилами. Этот репозиторий владеет своей областью; приложение и его UI остаются в `CybOS-demo`.

## Начать работу

Репозитории размещаются рядом в одной рабочей папке. Для полного окружения используйте `cybOS/tools/bootstrap.py` и `cybLaunch/launcher.py`; точные ревизии публикуются в lock-файлах интегратора.

```bash
cd Robotcyb-game
npm test
python3 -m http.server 8000 --bind 127.0.0.1
```

## Структура

- `game.js` — детерминированные правила симуляции.
- `index.html`, `ui.js`, `style.css` — игровой интерфейс.
- `tests/` — проверки ресурсов и ошибочных действий.
- `docs/ECOSYSTEM.md` — границы компонента и связи.
