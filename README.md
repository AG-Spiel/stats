[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![Website](https://img.shields.io/website?down_color=red&down_message=offline&label=website&style=flat-square&up_color=green&up_message=online&url=https%3A%2F%2Fag-spiel.github.io%2Fstats)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=AG-Spiel_stats&metric=security_rating)](https://sonarcloud.io/dashboard?id=AG-Spiel_stats)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=AG-Spiel_stats&metric=coverage)](https://sonarcloud.io/dashboard?id=AG-Spiel_stats)
[![release](https://github.com/AG-Spiel/stats/actions/workflows/ci.yml/badge.svg?branch=main&event=push)](https://github.com/AG-Spiel/stats/actions/workflows/ci.yml)

# AG-Spiel Statistics
This project visualizes publicly available data of the AG-Spiel or userprojects of the game.

In the future this project will bundle data from different userprojects on one website.

Built with Angular and hosted with github-pages.

To make the hosting of this project as independent and decentralized as possible, github-pages was chosen as hosting service. This way, other developers can fork, develop and host this project themselves with little effort and without incurring ongoing costs.

## Table of Content
- [AG-Spiel Statistics](#ag-spiel-statistics)
  - [Table of Content](#table-of-content)
  - [Features](#features)
  - [Contributing](#contributing)
  - [Further help](#further-help)

## Features
- List of all Groups
- List of all shares
- **Share-Statistics:**
  - Progress BV/Share und stock price
  - Progress depot (stocks, cash, bonds, loans, certs)
  - Progress orderbook (Sell-/Buy-Orders)
  - Progress activits
  - Progress AGSX-Points
- **Group-Statistics:**
  - Progress of total book value and market value per index
  - Progress of all summed portfolios in the index(stocks, cash, bonds, loans, certs)
  - Progress of all summed order books in the group (sell/buy orders)
- **Market Statistics:**
  - Progress of various key figures (market capitalization, BW, BBW, SW, FP)
  - Progress of all portfolios (shares, bonds, loans, certis, cash, net cash)
  - Progress of all order books (sell and buy orders, cash)
  - Progress of the takeover protection and the number of players
  - Progress of the number of premium players (premium, no premium, gold premium, silver premium, number of players)


## Contributing
1. Clone project
2. Project setup: `npm install`
3. Start development server: `npm run serve`
4. Run unittests: `npm test`
5. Run angular lint: `npm run lint`
6. Run prettier: `npm run prettier:check`
7. Build production: `npm rund build:prod`

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
