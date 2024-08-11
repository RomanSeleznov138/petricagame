<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Styles -->
    <style>

    </style>

    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }
    </style>

    <link href="{{ mix('css/app.css') }}" rel="stylesheet" async defer />

</head>

<body class="antialiased">
    <div class="game-container">
        <div class="header">
            <div class="game-user-profile">
                <div class="profile-info">
                    <div class="game-user-profile-avatar">
                        <img src="" alt="">
                    </div>
                    <div class="game-user-profile-body">
                        <div class="game-user-profile-body-username">Elbowbeard</div>
                        <div class="game-user-profile-body-level-description">Level <span class="game-user-profile-body-level-description-level">1</span>
                            <span class="levelTotalNumber">/10 </span>-
                            <span class="game-user-profile-body-level-description-name">Novice</span>
                        </div>
                    </div>
                </div>
                <div class="game-user-profile-body-level-wrapper">
                    <div class="game-user-profile-body-level-percent"></div>
                </div>
            </div>
            <div class="game-user-inventory">
                <div class="game-user-inventory-image">
                    <img src="images/chest.png" alt="">
                </div>
                <div class="game-user-inventory-total-count">0</div>
                <div class="game-user-inventory-arrow">
                    <img src="images/angle-right.png" alt="">
                </div>
            </div>
        </div>
        <div class="tabs">
            <div class="tab" id="GameTab">
                <div class="game-user-balance">
                    <img src="images/coin.png" alt="" class="game-user-balance-coin">
                    <span class="game-user-balance-text">0</span>
                </div>

                <div class="game-ingredients">
                    <div class="game-ingredient-item">
                        <div class="game-ingredient-item-image">
                            <img src="" alt="">
                        </div>
                        <div class="game-ingredient-item-level">
                            <div class="game-ingredient-item-level-percent"></div>
                        </div>
                        <div class="game-ingredient-item-percent">%</div>
                    </div>
                    <div class="game-ingredient-item">
                        <div class="game-ingredient-item-image">
                            <img src="" alt="">
                        </div>
                        <div class="game-ingredient-item-level">
                            <div class="game-ingredient-item-level-percent"></div>
                        </div>
                        <div class="game-ingredient-item-percent">%</div>
                    </div>
                    <div class="game-ingredient-item">
                        <div class="game-ingredient-item-image">
                            <img src="" alt="">
                        </div>
                        <div class="game-ingredient-item-level">
                            <div class="game-ingredient-item-level-percent"></div>
                        </div>
                        <div class="game-ingredient-item-percent">%</div>
                    </div>
                    <div class="game-ingredient-item">
                        <div class="game-ingredient-item-image">
                            <img src="" alt="">
                        </div>
                        <div class="game-ingredient-item-level">
                            <div class="game-ingredient-item-level-percent"></div>
                        </div>
                        <div class="game-ingredient-item-percent">%</div>
                    </div>
                    <div class="game-ingredient-item">
                        <div class="game-ingredient-item-image">
                            <img src="" alt="">
                        </div>
                        <div class="game-ingredient-item-level">
                            <div class="game-ingredient-item-level-percent"></div>
                        </div>
                        <div class="game-ingredient-item-percent">%</div>
                    </div>
                </div>
                <div class="game-tap-wrapper">
                    <div class="play-game">
                        <div class="warning"></div>
                        <div class="game-tap-description">
                            <div class="refreshTimer"></div>
                        </div>
                        <div class="game-tap-element">
                            <img src="" alt="">
                        </div>
                        <div class="game-tap-element">
                            <img src="" alt="">
                        </div>
                        <div class="game-tap-element">
                            <img src="" alt="">
                        </div>
                        <div class="game-tap-element">
                            <img src="" alt="">
                        </div>
                        <div class="game-tap-element">
                            <img src="" alt="">
                        </div>
                        <div class="game-tap-element">
                            <img src="" alt="">
                        </div>
                        <div class="game-tap-element">
                            <img src="" alt="">
                        </div>
                        <div class="game-tap-element">
                            <img src="" alt="">
                        </div>
                    </div>
                    <div class="waiting-game">
                        <div class="waiting-game-body">
                            <img class="rotatingImage" src="images/craft_aura.png" alt="">
                            <img class="port" src="images/craft_jar.png" alt="">
                        </div>
                        <div class="waitingTimer"></div>
                        <div class="game-tap-craft-button">
                            <img src="images/craft_button.png" alt="">
                        </div>
                        <div class="game-tap-collect-button">
                            <img src="images/craft_collect.png" alt="">
                        </div>
                    </div>

                </div>
            </div>
            <div class="tab" id="InventoryTab" hidden>
                <div class="inventoryHeader">
                    <div class="title">INVENTORY</div>
                    <div class="backBtn"><img src="images/back.svg" alt=""></div>
                </div>
                <div class="inventoryBody">
                    <div class="invenvtoryElement">
                        <div class="inventoryImg">
                            <img src="" alt="">
                        </div>
                        <div class="inventoryInfo">
                            <div class="invenvtoryTitle"></div>
                            <div class="invenvtoryNumber"></div>
                        </div>
                    </div>
                    <div class="invenvtoryElement">
                        <div class="inventoryImg">
                            <img src="" alt="">
                        </div>
                        <div class="inventoryInfo">
                            <div class="invenvtoryTitle"></div>
                            <div class="invenvtoryNumber"></div>
                        </div>
                    </div>
                    <div class="invenvtoryElement">
                        <div class="inventoryImg">
                            <img src="" alt="">
                        </div>
                        <div class="inventoryInfo">
                            <div class="invenvtoryTitle"></div>
                            <div class="invenvtoryNumber"></div>
                        </div>
                    </div>
                    <div class="invenvtoryElement">
                        <div class="inventoryImg">
                            <img src="" alt="">
                        </div>
                        <div class="inventoryInfo">
                            <div class="invenvtoryTitle"></div>
                            <div class="invenvtoryNumber"></div>
                        </div>
                    </div>
                    <div class="invenvtoryElement">
                        <div class="inventoryImg">
                            <img src="" alt="">
                        </div>
                        <div class="inventoryInfo">
                            <div class="invenvtoryTitle"></div>
                            <div class="invenvtoryNumber"></div>
                        </div>
                    </div>
                    <div class="invenvtoryElement">
                        <div class="inventoryImg">
                            <img src="" alt="">
                        </div>
                        <div class="inventoryInfo">
                            <div class="invenvtoryTitle"></div>
                            <div class="invenvtoryNumber"></div>
                        </div>
                    </div>
                    <div class="invenvtoryElement">
                        <div class="inventoryImg">
                            <img src="" alt="">
                        </div>
                        <div class="inventoryInfo">
                            <div class="invenvtoryTitle"></div>
                            <div class="invenvtoryNumber"></div>
                        </div>
                    </div>
                    <div class="invenvtoryElement">
                        <div class="inventoryImg">
                            <img src="" alt="">
                        </div>
                        <div class="inventoryInfo">
                            <div class="invenvtoryTitle"></div>
                            <div class="invenvtoryNumber"></div>
                        </div>
                    </div>
                    <div class="invenvtoryElement">
                        <div class="inventoryImg">
                            <img src="" alt="">
                        </div>
                        <div class="inventoryInfo">
                            <div class="invenvtoryTitle"></div>
                            <div class="invenvtoryNumber"></div>
                        </div>
                    </div>
                    <div class="invenvtoryElement">
                        <div class="inventoryImg">
                            <img src="" alt="">
                        </div>
                        <div class="inventoryInfo">
                            <div class="invenvtoryTitle"></div>
                            <div class="invenvtoryNumber"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="game-footer">
                <div class="footer-body">
                    <div class="game-footer-nav active">
                        <img src="images/earn1.png" alt="" class="image-active">
                        <img src="images/earn2.png" alt="" class="image-deactive">
                        <div class="title">Earn</div>
                    </div>
                    <div class="game-footer-nav">
                        <img src="images/tasks1.png" alt="" class="image-active">
                        <img src="images/tasks2.png" alt="" class="image-deactive">
                        <div class="title">Tasks</div>
                    </div>
                    <div class="game-footer-nav">
                        <img src="images/friends1.png" alt="" class="image-active">
                        <img src="images/friends2.png" alt="" class="image-deactive">
                        <div class="title">Friends</div>
                    </div>
                    <div class="game-footer-nav">
                        <img src="images/heroes1.png" alt="" class="image-active">
                        <img src="images/heroes2.png" alt="" class="image-deactive">
                        <div class="title">Heroes</div>
                    </div>
                    <div class="game-footer-nav">
                        <img src="images/airdrop1.png" alt="" class="image-active">
                        <img src="images/airdrop2.png" alt="" class="image-deactive">
                        <div class="title">Airdrop</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="loader"></div>
    </div>
</body>
<script src="{{ mix('js/app.js') }}"></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://telegram.org/js/telegram-web-app.js"></script>
<script>
    Telegram.WebApp.ready();
    let telegramUser = [];
    if (window.location.host == "localhost:8000") {
        telegramUser = {
            "id": 6469354442,
            "first_name": "LiLu",
            "last_name": "Test",
            "username": "lilujang1",
            "language_code": "en",
            "allows_write_to_pm": true
        }
    } else {
        const tgWebApp = window.Telegram?.WebApp;
        tgWebApp.setHeaderColor('red');
        telegramUser = tgWebApp?.initDataUnsafe?.user;
    }

    var gameController;
    var baseUrl = window.location.origin;

    $(document).ready(function() {
        initUser();
    })

    function initUser() {
        $.ajax({
            url: `${baseUrl}/api/init-user`,
            type: "post",
            data: telegramUser,
            success: function(resp) {
                var gameData = {
                    balance: resp.gameStatus.balance,
                    levelPoint: resp.gameStatus.level_point,
                    currentRecipe: {
                        name: resp.gameStatus.current_recipe,
                        ingredientsClicks: resp.ingredient_clicks
                    },
                    lastCraftTime: resp.gameStatus.last_crafted_time,
                    isCollected: resp.gameStatus.is_collected,
                    currentUser: resp.user,
                    inventory: resp.inventories
                };
                if (window.GameController)
                    gameController = new GameController(gameData, $('.game-container'));
            }
        })
    }
</script>

</html>