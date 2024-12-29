</script>
    <script>
        $(document).ready(function() {
            // 点击按钮时，切换下拉菜单的显示状态
            $('#dropdownButton').click(function() {
                $('#dropdownMenu').toggle();
            });

            // 点击页面其他区域时，隐藏下拉菜单
            $(document).click(function(event) {
                if (!$(event.target).closest('.dropdown').length) {
                    $('#dropdownMenu').hide();
                }
            });
        });
    </script>
</body>
</html>