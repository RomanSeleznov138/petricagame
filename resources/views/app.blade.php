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
        <div class="game-user-profile">
            <div class="game-user-profile-avatar">
                <img src="" alt="">
            </div>
            <div class="game-user-profile-body">
                <div class="game-user-profile-body-title">Welcome Back.</div>
                <div class="game-user-profile-body-username">Elbowbeard</div>
                <div class="game-user-profile-body-level-wrapper">
                    <div class="game-user-profile-body-level-percent"></div>
                </div>
                <div class="game-user-profile-body-level-description">Level <span
                        class="game-user-profile-body-level-description-level">1</span>/10, <span
                        class="game-user-profile-body-level-description-name">Novice</span></div>
            </div>
        </div>
        <div class="tabs">
            <div class="tab" id="GameTab" >
                <div class="game-second-row">
                    <div class="game-user-balance">
                        <img src="images/coin.png" alt="" class="game-user-balance-coin">
                        <span class="game-user-balance-text">0</span>
                    </div>
                    <div class="game-user-inventory">Inventory</div>
                </div>
                <div class="game-ingredients">
                    <div class="game-ingredient-item">
                        <div class="game-ingredient-item-image">
                            <img src="" alt="">
                        </div>
                        <div class="game-ingredient-item-title">Test Title</div>
                        <div class="game-ingredient-item-level">
                            <div class="game-ingredient-item-level-percent"></div>
                        </div>
                    </div>
                    <div class="game-ingredient-item">
                        <div class="game-ingredient-item-image">
                            <img src="" alt="">
                        </div>
                        <div class="game-ingredient-item-title">Test Title</div>
                        <div class="game-ingredient-item-level">
                            <div class="game-ingredient-item-level-percent"></div>
                        </div>
                    </div>
                    <div class="game-ingredient-item">
                        <div class="game-ingredient-item-image">
                            <img src="" alt="">
                        </div>
                        <div class="game-ingredient-item-title">Test Title</div>
                        <div class="game-ingredient-item-level">
                            <div class="game-ingredient-item-level-percent"></div>
                        </div>
                    </div>
                    <div class="game-ingredient-item">
                        <div class="game-ingredient-item-image">
                            <img src="" alt="">
                        </div>
                        <div class="game-ingredient-item-title">Test Title</div>
                        <div class="game-ingredient-item-level">
                            <div class="game-ingredient-item-level-percent"></div>
                        </div>
                    </div>
                    <div class="game-ingredient-item">
                        <div class="game-ingredient-item-image">
                            <img src="" alt="">
                        </div>
                        <div class="game-ingredient-item-title">Test Title</div>
                        <div class="game-ingredient-item-level">
                            <div class="game-ingredient-item-level-percent"></div>
                        </div>
                    </div>
                </div>
                <div class="game-tap-wrapper">
                    <div class="game-tap-description">
                        <div class="refreshTimer"></div>
                        <div class="waitingTimer"></div>
                        <div class="game-tap-craft-button">CRAFT</div>
                        <div class="game-tap-collect-button">Collect</div>
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
        </div>
        <div class="game-footer">
            <div class="game-footer-nav active">
                <img src="images/icons.png" alt="" class="image-active">
                <img src="images/icons2.png" alt="" class="image-deactive">
            </div>
            <div class="game-footer-nav">
                <img src="images/icons3.png" alt="" class="image-active">
                <img src="images/icons4.png" alt="" class="image-deactive">
            </div>
            <div class="game-footer-nav">
                <img src="images/icons5.png" alt="" class="image-active">
                <img src="images/icons6.png" alt="" class="image-deactive">
            </div>
            <div class="game-footer-nav">
                <img src="images/icons7.png" alt="" class="image-active">
                <img src="images/icons8.png" alt="" class="image-deactive">
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
    const tgWebApp = window.Telegram?.WebApp;
    const telegramUser = tgWebApp?.initDataUnsafe?.user;
    //const telegramUser = {
    //    "id": 6469354442,
    //    "first_name": "LiLu",
    //    "last_name": "Test",
    //    "username": "lilujang1",
    //    "language_code": "en",
    //    "allows_write_to_pm": true
    ///}
    console.log(telegramUser)
    // var gameData = {
    //     balance: 300,
    //     levelPoint: 300,
    //     inventory: [
    //         "Moonlight Elixir"
    //     ],
    //     currentRecipe: {
    //         name: "Shadowfire Brew",
    //         ingredientsClicks: [10, 20, 0, 0, 0]
    //     },
    //     lastCraftTime: new Date(),
    //     isCollected: true,
    //     currentUser: {
    //         id: 1,
    //         t_user_id: 6469354442,
    //         first_name: "LiLu",
    //         last_name: "Test",
    //         username: "lilujang1",
    //         created_at: "2024-07-24T00:59:10.000000Z",
    //         updated_at: "2024-07-24T01:00:40.000000Z"
    //     }
    // }

    var gameController;
    var baseUrl = window.location.origin;

    $(document).ready(function () {
        initUser();
    })

    function initUser() {
        $.ajax({
            url: `${baseUrl}/api/init-user`,
            type: "post",
            data: telegramUser,
            success: function (resp) {
                var gameData = {
                    balance: resp.gameStatus.balance,
                    levelPoint: resp.gameStatus.level_point,
                    inventory: [
                        "Moonlight Elixir"
                    ],
                    currentRecipe: {
                        name: resp.gameStatus.current_recipe,
                        ingredientsClicks: resp.gameStatus.ingredients_clicks.split(',').map(Number)
                    },
                    lastCraftTime:resp.gameStatus.last_crafted_time,
                    isCollected: resp.gameStatus.is_collected,
                    currentUser: resp.user,
                    inventory:resp.inventories
                };
                if (window.GameController)
                    gameController = new GameController(gameData, $('.game-container'));
            }
        })
    }
</script>

</html>
