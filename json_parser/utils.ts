export function deepEqual (x: any, y: any) {
    if (x === y) {
        return true;
    }
    else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
        if (Object.keys(x).length != Object.keys(y).length)
        {
            return false;
        }

        if(Array.isArray(x))
        {
            x = [...x].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
        }
        if(Array.isArray(y))
        {
            y = [...y].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
        }

        for (var prop in x) {
            if (y.hasOwnProperty(prop))
            {  
                if (! deepEqual(x[prop], y[prop]))
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }
        
        return true;
    }
    else
    {
        return false;
    }
}