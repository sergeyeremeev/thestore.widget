var mainBg,
    eventNameColor,
    eventNameFontSize,
    retailerNameColor,
    retailerNameFontSize,
    overlayColor,
    overlayBorderRadius,
    widgetButtonColor,
    widgetButtonMargin,
    widgetButtonWidth,
    widgetButtonHeight,
    widgetButtonLineHeight,
    widgetButtonFont,
    filterButtonsColor,
    filterButtonsWidth,
    filterButtonsHeight,
    filterButtonsLineHeight,
    filterButtonsFont,
    widgetSettings = {};

$('.main-bg').on('click', '.radio input', function () {
    $this = $(this);
    $('.custom-bg').val('');
    mainBg = $this.val();
    $('.preview').css('background', mainBg);
});

$('.main-bg').on('keyup', '.custom-bg', function () {
    $this = $(this);
    $('.main-bg').find('.radio input').prop('checked',false);
    $('.preview').css('background', '#fff');
    mainBg = $this.val();
    $('.preview').css('background', mainBg);
});

$('.event').on('click', '.radio input', function () {
    $this = $(this);
    eventNameColor = $this.val();
    $('.widget-caption').find('h5').css('color', eventNameColor);
});

$('.event').on('change', '.font-size', function () {
    $this = $(this);
    eventNameFontSize = $this.val() + 'px';
    $('.widget-caption').find('h5').css('font-size', eventNameFontSize);
});

$('.retailer').on('click', '.radio input', function () {
    $this = $(this);
    retailerNameColor = $this.val();
    $('.widget-subcaption').find('b, small, a').css('color', retailerNameColor);
});

$('.retailer').on('change', '.font-size', function () {
    $this = $(this);
    retailerNameFontSize = $this.val() + 'px';
    $('.widget-subcaption').find('b, a').css('font-size', retailerNameFontSize);
});

$('.overlay').on('click', '.radio input', function () {
    $this = $(this);
    overlayColor = $this.val();
    $('.widget-caption, .caption-small').css('background', overlayColor);
});

$('.overlay').on('click', '.well input', function () {
    $this = $(this);
    switch ($this.val()) {
        case 'square':
            overlayBorderRadius = 0;
            break;
        case 'round':
            overlayBorderRadius = '8px';
    }
    $('.widget-caption').css('border-radius', overlayBorderRadius);
});

$('.buttons').on('click', '.radio input', function () {
    $this = $(this);
    widgetButtonColor = $this.val();
    $('.widget-offer-button').css('background', widgetButtonColor);
    $('.widget-offer-button').css('border', '1px solid ' + widgetButtonColor);
});

$('.buttons').on('click', '.well input', function () {
    $this = $(this);
    widgetButtonMargin = '5px auto 0';
    switch ($this.val()) {
        case 'small':
            widgetButtonWidth = '50%';
            widgetButtonHeight = '34px';
            widgetButtonLineHeight = '20px';
            widgetButtonFont = '14px';
            $('.widget-offer-button').css({'width': '50%', 'margin': widgetButtonMargin, 'line-height': '20px', 'height': '34px', 'font-size': '14px'});
            break;
        case 'normal':
            widgetButtonWidth = '100%';
            widgetButtonHeight = '34px';
            widgetButtonLineHeight = '20px';
            widgetButtonFont = '14px';
            $('.widget-offer-button').css({'width': '100%', 'height': '34px', 'line-height': '20px', 'font-size': '14px'});
            break;
        case 'large':
            widgetButtonWidth = '100%';
            widgetButtonHeight = '42px';
            widgetButtonLineHeight = '32px';
            widgetButtonFont = '16px';
            $('.widget-offer-button').css({'width': '100%', 'height': '42px', 'line-height': '32px', 'font-size': '16px'});
    }
});

$('.filters').on('click', '.radio input', function () {
    $this = $(this);
    filterButtonsColor = $this.val();
    $('.filter-button').css('background', filterButtonsColor);
});

$('.filters').on('click', '.well input', function () {
    $this = $(this);
    switch ($this.val()) {
        case 'small':
            filterButtonsWidth = '138';
            filterButtonsHeight = '34px';
            filterButtonsLineHeight = '20px';
            filterButtonsFont = '14px';
            $('.filter-button').css({'width': '138px', 'line-height': '20px', 'height': '34px', 'font-size': '14px'});
            break;
        case 'normal':
            filterButtonsWidth = '170';
            filterButtonsHeight = '34px';
            filterButtonsLineHeight = '20px';
            filterButtonsFont = '14px';
            $('.filter-button').css({'width': '170px', 'height': '34px', 'line-height': '20px', 'font-size': '14px'});
            break;
        case 'large':
            filterButtonsWidth = '220';
            filterButtonsHeight = '42px';
            filterButtonsLineHeight = '30px';
            filterButtonsFont = '16px';
            $('.filter-button').css({'width': '220px', 'height': '42px', 'line-height': '30px', 'font-size': '16px'});
    }
});

// generate button
widgetSettings = {
    "widget-main-bg": mainBg,
    "widget-event-name-color": eventNameColor,
    "widget-event-name-font-size": eventNameFontSize,
    "widget-retailer-name-color": retailerNameColor,
    "widget-retailer-name-font-size": retailerNameFontSize,
    "widget-overlay-color": overlayColor,
    "widget-overlay-border-radius": overlayBorderRadius,
    "widget-offer-button-margin": widgetButtonMargin,
    "widget-offer-button-width": widgetButtonWidth,
    "widget-offer-button-height": widgetButtonHeight,
    "widget-offer-button-line-height": widgetButtonLineHeight,
    "widget-offer-button-font": widgetButtonFont,
    "widget-filter-button-color": filterButtonsColor,
    "widget-filter-button-width": filterButtonsWidth,
    "widget-filter-button-height": filterButtonsHeight,
    "widget-filter-button-line-height": filterButtonsLineHeight,
    "widget-filter-button-font": filterButtonsFont
}

$('.generate').on('click', function() {

});

$('.btn-change').on('click', function () {
    $this = $(this);
    $this.toggleClass('toggled');
    $this.closest('.row').next('.toggled-content').toggleClass('toggled');

    if ($this.hasClass('toggled')) {
        $this.text('Close');
    } else {
        $this.text('Change');
    }
});



$(document).ready(function() {
    $('.cats-select').multiselect({
        enableClickableOptGroups: true
    });
    $('.cats-select').closest('div').find('button.multiselect').next('ul').addClass('cats-dropdown');

    $('.retailers-select').multiselect();
    $('.retailers-select').closest('div').find('button.multiselect').next('ul').addClass('retailers-dropdown');
});
